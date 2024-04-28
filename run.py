#!/usr/bin/env python3

"""

This is a work in progress

"""

import os
import argparse
from subprocess import check_call

file_dir = os.path.dirname(__file__)

parser = argparse.ArgumentParser(description="Generate a program using TSL")
parser.add_argument('-d', '--dir', required=True, help='Directory of the prompts to generate from')
parser.add_argument('-m', '--method', choices=['nl', 'nl+spec', 'nl+spec+synth'], help='"nl" means generate using only the natural language promps, "nl+spec" means also use the TSL spec, and "nl+spec+synth" means also use the synthesized code.')
parser.add_argument('-l', '--lang', default='JavaScript', help='Target generated implementation programming language (default: JavaScript)')

args = parser.parse_args()

to_interpolate = {
    #'few_shot_header': 'shotPrompt.txt',
    'functions_and_predicates': 'Headers.txt',
    'natural_language_summary': 'NL.summary.txt',
    'natural_language_description': 'NL.txt',
    'wrapper_api': 'Wrapper_api.js'
}

computed_dir = os.path.join(args.dir, "computed")
if not os.path.exists(computed_dir):
    os.makedirs(computed_dir)

def check_content_between_markers(filename, start_marker, end_marker):
    with open(os.path.join(args.dir, filename), 'r') as file:
        content = file.read()
    start_index = content.find(start_marker) + len(start_marker)
    end_index = content.find(end_marker)
    if start_index == -1 or end_index == -1 or end_index <= start_index:
        return False  # Markers not found or in the wrong order
    return content[start_index:end_index].strip() == ''

use_no_assumptions = check_content_between_markers('NL.txt', 'Assumptions:', 'Guarantee:')
use_no_functions = check_content_between_markers('Headers.txt', 'Functions:', 'Predicates:')

if use_no_assumptions and use_no_functions:
    spec_template = 'Spec_withoutFA_template.prompt'
    impl_template = 'Impl_withoutFunctions_template.prompt'
elif use_no_assumptions:
    spec_template = 'Spec_withoutAssumptions_template.prompt'
elif use_no_functions:
    spec_template = 'Spec_withoutFunctions_template.prompt'
    impl_template = 'Impl_withoutFunctions_template.prompt'
else:
    spec_template = 'Spec_template.prompt'
    impl_template = 'Impl_template.prompt'

def load_file_and_interpolate(filename):
    with open(filename) as file:
        result = file.read()
        for (name, filename) in to_interpolate.items():
            path = os.path.join(args.dir, filename)
            with open(path) as file:
                replacement = file.read()
            for to_replace in [ '[[' + name.upper() + '_GO_HERE]]', '[[' + name.upper() + '_GOES_HERE]]' ]:
                result = result.replace(to_replace, replacement)
        result = result.replace('[[LANGUAGE_GOES_HERE]]', args.lang)
    return result

if args.method == 'nl':
    spec_prompt_filename = os.path.join(computed_dir, "Spec.prompt")
    spec_file_path = os.path.join(file_dir, spec_template)  # use dynamically chosen spec template
    with open(spec_prompt_filename, 'w') as file:
        file.write(load_file_and_interpolate(spec_file_path))

    spec_filename = os.path.join(computed_dir, "Spec.tsl")
    synth_filename = os.path.join(computed_dir, "Synth.js")

    print(f'Please paste the contents of this file into the TSL GPT:\n\n    {spec_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {spec_filename}\n\nWhen you have done this, press Enter')
    input()
    check_call(['tsl', 'synthesize', '-i', spec_filename, '--js', '-o', synth_filename])
else:
    spec_filename = os.path.join(args.dir, spec_template)
    raise Exception('the only method implemented is "nl". the others are TODO.')

impl_prompt_filename = os.path.join(computed_dir, 'Impl.prompt')
impl_filename = os.path.join(computed_dir, 'Impl.js')
impl_file_path = os.path.join(file_dir, impl_template)
with open(impl_prompt_filename, 'w') as file:
    file.write(load_file_and_interpolate(impl_file_path))

print(f'Please paste the contents of this file into the TSL GPT:\n\n    {impl_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {impl_filename}\n\nWhen you have done this, press Enter')
input()

dir_name = os.path.basename(os.path.normpath(args.dir))
output_html_filename = f"{dir_name}.html"

wrapper_template_path = os.path.join(args.dir, 'wrapper_template.html')
output_html_path = os.path.join(computed_dir, output_html_filename)  # Output file path in the computed directory with the directory name

if os.path.exists(wrapper_template_path):
    with open(wrapper_template_path, 'r') as file:
        wrapper_contents = file.read()
    with open(impl_filename, 'r') as file:
        impl_contents = file.read()
    placeholder_comment = '//[[GENERATED_FUNCTIONS_AND_PREDICATES_GO_HERE]]'
    if placeholder_comment in wrapper_contents:
        modified_wrapper = wrapper_contents.replace(placeholder_comment, impl_contents)
        with open(output_html_path, 'w') as file:
            file.write(modified_wrapper)
        print(f"The Impl.js contents have been successfully inserted into {output_html_path}.")
    else:
        print("The placeholder comment does not match in the wrapper_template.html. Please ensure it is '//[[GENERATED_FUNCTIONS_AND_PREDICATES_GO_HERE]]'.")
else:
    print("Please include a wrapper_template.html file with a line of comment '//[[GENERATED_FUNCTIONS_AND_PREDICATES_GO_HERE]]' inside the file to get the generated wrapper HTML.")