#!/usr/bin/env python3

"""

This is a work in progress

"""


import re
import os
from copy import copy
import json
import datetime
import argparse
from subprocess import check_call

from openai_helper import (
    ask_chatgpt,
    NO_CODE_GEN,
    NO_TEMPLATE_REGEN,
    SKELETON_REGEN,
    BASE_HTML,
)

file_dir = os.path.dirname(__file__)

class RunExperimentArgs:
    def __init__(
        dir,
        num_iter = 1,
        spec_prompt_file = "Spec_template.prompt",
        lang = "JavaScript",
        method = "nl",
        no_openai = False,
        regen_html = False,
    ):
        self.num_iter = num_iter
        self.dir = dir
        self.spec_prompt_file = spec_prompt_file
        self.json = json
        self.lang = lang
        self.method = method
        self.no_openai = no_openai
        self.regen_html = regen_html

def run_with_args(args):
    print(datetime.datetime.now(), "Running with args", args)

    # handle repeated iterations
    if 1 < int(args.num_iter):
        for _ in range(int(args.num_iter)):
            new_args = copy(args)
            new_args.num_iter = 1
            run_with_args(new_args)
        return

    # handle "run all benchmarks"
    if args.dir.lower() == "all":
        for benchmark in json.load(open(os.path.join(file_dir, "benchmarks.json"))):
            new_args = copy(args)
            new_args.dir = benchmark
            run_with_args(new_args)
        return

    # handle LOPSTR experiment
    if args.spec_prompt_file.lower() == "lopstr":
        for prompt_file in [
            "Spec_template.prompt",
            "Spec_onlyNlAndSummary_template.prompt",
            "Spec_onlySummaryAndHeaders_template.prompt",
        ]:
            new_args = copy(args)
            new_args.spec_prompt_file = prompt_file
            run_with_args(new_args)
        return

    to_interpolate = {
        #'few_shot_header': 'shotPrompt.txt',
        "functions_and_predicates": "Headers.txt",
        "natural_language_summary": "NL.summary.txt",
        "natural_language_description": "NL.txt",
        "wrapper_api": "Wrapper_api.js",
    }

    computed_dir = os.path.join(args.dir, "computed")
    if not os.path.exists(computed_dir):
        os.makedirs(computed_dir)

    with open(os.path.join(computed_dir, "args.json"), "w") as file:
        json.dump(args.__dict__, file, indent=2)

    def check_content_between_markers(filename, start_marker, end_marker):
        with open(os.path.join(args.dir, filename), "r") as file:
            content = file.read()
        start_index = content.find(start_marker) + len(start_marker)
        end_index = content.find(end_marker)
        if start_index == -1 or end_index == -1 or end_index <= start_index:
            return False  # Markers not found or in the wrong order
        return content[start_index:end_index].strip() == ""

    use_no_assumptions = check_content_between_markers(
        "NL.txt", "Assumptions:", "Guarantees:"
    )
    use_no_functions = check_content_between_markers(
        "Headers.txt", "Functions:", "Predicates:"
    )

    if use_no_assumptions and use_no_functions:
        spec_template = "Spec_withoutFA_template.prompt"
        impl_template = "Impl_withoutFunctions_template.prompt"
    elif use_no_assumptions:
        spec_template = "Spec_withoutAssumptions_template.prompt"
    elif use_no_functions:
        spec_template = "Spec_withoutFunctions_template.prompt"
        impl_template = "Impl_withoutFunctions_template.prompt"
    else:
        spec_template = "Spec_template.prompt"
        impl_template = "Impl_template.prompt"

    # override with filename
    if args.spec_prompt_file != "Spec_template.prompt":
        spec_template = args.spec_prompt_file

    def load_file_and_interpolate(filename):
        with open(filename) as file:
            result = file.read()
            for name, filename in to_interpolate.items():
                path = os.path.join(args.dir, filename)
                with open(path) as file:
                    replacement = file.read()
                for to_replace in [
                    "[[" + name.upper() + "_GO_HERE]]",
                    "[[" + name.upper() + "_GOES_HERE]]",
                ]:
                    result = result.replace(to_replace, replacement)
            result = result.replace("[[LANGUAGE_GOES_HERE]]", args.lang)
        return result

    def output_error(message):
        print(message)
        with open(os.path.join(computed_dir, "err.log"), "a") as file:
            file.writelines([message])
        log_results()

    def log_results():
        if args.method == "no_tsl":
            template_filename = "No_tsl.prompt"
        else:
            template_filename = spec_template            
        log_outer_dir = os.path.join(
            file_dir, "results", "by_benchmark", args.dir, template_filename
        )
        if not os.path.exists(log_outer_dir):
            os.makedirs(log_outer_dir)
        log_dir = os.path.join(log_outer_dir, datetime.datetime.now().isoformat())
        if args.verbose:
            print("Moving computed dir to", log_dir)
        check_call(["mv", computed_dir, log_dir])

    def extract_first_code_block(text):
        match = re.search(r"```.*?\n((?:.|\n)+?)```", text)
        if match == None:
            return None
        else:
            return match[1]

    if args.method == "nl":
        spec_template_path = os.path.join(
            file_dir, spec_template
        )  # use dynamically chosen spec template
        spec_filename = os.path.join(computed_dir, "Spec.tsl")
        synth_filename = os.path.join(computed_dir, "Synth.js")
        spec_response_filename = os.path.join(computed_dir, "Spec_response.txt")

        spec_prompt = load_file_and_interpolate(spec_template_path)
        spec_prompt_filename = os.path.join(computed_dir, "Spec.prompt")
        with open(spec_prompt_filename, "w") as file:
            file.write(spec_prompt)

        if args.no_openai:
            print(
                f"Please paste the contents of this file into the TSL GPT:\n\n    {spec_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {spec_filename}\n\nWhen you have done this, press Enter"
            )
            input()
        else:
            response = ask_chatgpt(spec_prompt, args.model)
            code_block = extract_first_code_block(response.choices[0].message.content)
            with open(spec_response_filename, "w") as file:
                file.write(response.choices[0].message.content)
            if code_block == None:
                return output_error(
                    f"No valid code block in response. See {spec_response_filename}"
                )
            else:
                with open(spec_filename, "w") as file:
                    file.write(code_block)

        try:
            check_call(
                ["tsl", "synthesize", "-i", spec_filename, "--js", "-o", synth_filename]
            )
        except BaseException as e:
            return output_error(str(e))
    elif args.method == "no_tsl":
        impl_template_path = os.path.join(
            file_dir, "No_tsl.prompt"
        )
        impl_response_filename = os.path.join(computed_dir, "Impl_response.txt")
        impl_filename = os.path.join(computed_dir, "Impl.js")

        impl_prompt = load_file_and_interpolate(impl_template_path)
        impl_prompt_filename = os.path.join(computed_dir, "No_tsl.prompt")
        with open(impl_prompt_filename, "w") as file:
            file.write(impl_prompt)

        if args.no_openai:
            print(
                f"Please paste the contents of this file into the TSL GPT:\n\n    {impl_prompt_filename}\n\nThen, paste the first code block in the response into:\n\n    {impl_filename}\n\nWhen you have done this, press Enter"
            )
            input()
        else:
            response = ask_chatgpt(impl_prompt, args.model)
            code_block = extract_first_code_block(response.choices[0].message.content)
            with open(impl_response_filename, "w") as file:
                file.write(response.choices[0].message.content)
            if code_block == None:
                return output_error(
                    f"No valid code block in response. See {impl_response_filename}"
                )
            else:
                with open(impl_filename, "w") as file:
                    file.write(code_block)
    else:
        spec_filename = os.path.join(args.dir, spec_template)
        raise Exception('the only method implemented is "nl". the others are TODO.')

    if args.method != 'no_tsl':
        impl_prompt_filename = os.path.join(computed_dir, "Impl.prompt")
        impl_filename = os.path.join(computed_dir, "Impl.js")
        impl_template_path = os.path.join(file_dir, impl_template)
        impl_prompt = load_file_and_interpolate(impl_template_path)
        impl_response_filename = os.path.join(computed_dir, "Impl_response.txt")
        with open(impl_prompt_filename, "w") as file:
            file.write(impl_prompt)

        if args.no_openai:
            print(
                f"Please paste the contents of this file into the TSL GPT:\n\n    {impl_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {impl_filename}\n\nWhen you have done this, press Enter"
            )
            input()
        else:
            response = ask_chatgpt(impl_prompt)
            code_block = extract_first_code_block(response.choices[0].message.content)
            with open(impl_response_filename, "w") as file:
                file.write(response.choices[0].message.content)
            if code_block == None:
                return output_error(
                    f"No valid code block in response. See {impl_response_filename}"
                )
            else:
                with open(impl_filename, "w") as file:
                    file.write(code_block)

    dir_name = os.path.basename(os.path.normpath(args.dir))
    output_html_filename = f"{dir_name}.html"

    wrapper_template_path = os.path.join(args.dir, "wrapper_template.html")
    output_html_path = os.path.join(
        computed_dir, output_html_filename
    )  # Output file path in the computed directory with the directory name

    if os.path.exists(wrapper_template_path):
        with open(wrapper_template_path, "r") as file:
            wrapper_contents = file.read()

        # Nik - added new flag, uses code block to seed gpt generation of code
        if args.regen_html:
            print("Using synthesized code to regenerate html")
            prompt_templates = [
                ("summary_gen", NO_CODE_GEN.format(spec_prompt)),
                ("code_ntregen", NO_TEMPLATE_REGEN.format(code_block)),
                (
                    "code_sknregen",
                    SKELETON_REGEN.format(spec_prompt, BASE_HTML, code_block),
                ),
                (
                    "code_sktregen",
                    SKELETON_REGEN.format(spec_prompt, wrapper_contents, code_block),
                ),
            ]

            for regen_task in prompt_templates:

                response = ask_chatgpt(regen_task[1])
                code_block = extract_first_code_block(
                    response.choices[0].message.content
                )

                regen_path = os.path.join(
                    computed_dir, f"{dir_name}_{regen_task[0]}.html"
                )
                with open(regen_path, "w") as file:
                    file.write(code_block)

        print("Inserting generated code into base template")
        with open(impl_filename, "r") as file:
            impl_contents = file.read()
        placeholder_comment = "//[[GENERATED_FUNCTIONS_AND_PREDICATES_GO_HERE]]"
        if placeholder_comment in wrapper_contents:
            modified_wrapper = wrapper_contents.replace(
                placeholder_comment, impl_contents
            )
            with open(output_html_path, "w") as file:
                file.write(modified_wrapper)
            print(
                f"The Impl.js contents have been successfully inserted into {output_html_path}."
            )
        else:
            return output_error(
                "The placeholder comment does not match in the wrapper_template.html. Please ensure it is '//[[GENERATED_FUNCTIONS_AND_PREDICATES_GO_HERE]]'."
            )
    else:
        return output_error(
            "Please include a wrapper_template.html file with a line of comment '//[[GENERATED_FUNCTIONS_AND_PREDICATES_GO_HERE]]' inside the file to get the generated wrapper HTML."
        )

    log_results()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Generate a program using TSL")
    parser.add_argument(
        "-d", "--dir", required=True, help="Directory of the prompts to generate from"
    )
    parser.add_argument(
        "-m",
        "--method",
        default="nl",
        choices=["nl", "nl+spec", "nl+spec+synth", "no_tsl"],
        help='"nl" means generate using only the natural language promps, "nl+spec" means also use the TSL spec, and "nl+spec+synth" means also use the synthesized code.',
    )
    parser.add_argument(
        "-l",
        "--lang",
        default="JavaScript",
        help="Target generated implementation programming language (default: JavaScript)",
    )
    parser.add_argument(
        "--no-openai",
        action="store_true",
        help="Do not query the openai api and instead output prompts for the user to paste into AI chats.",
    )
    parser.add_argument(
        "--model",
        default='gpt-4-turbo',
        help="The openai model (e.g. \"gpt-4-turbo\")",
    )
    parser.add_argument(
        "--spec-prompt-file",
        default="Spec_template.prompt",
        help="filename to use for the spec prompt",
    )
    parser.add_argument(
        "--log-results",
        action="store_true",
        help='Copy the affected "{Experiment}/computed" dir into "results" with the timestamp"',
    )
    parser.add_argument(
        "--num-iter", default=1, help="repeat the experiment [num-iter] times"
    )
    parser.add_argument(
        "--regen-html",
        default=False,
        action="store_true",
        help="regenerate the template?",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="print messages other than errors.",
    )

    args = parser.parse_args()

    run_with_args(args)
