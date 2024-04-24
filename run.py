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

args = parser.parse_args()

to_interpolate = {
    'functions_and_predicates': 'Headers.txt',
    'natural_language_summary': 'NL.summary.txt',
    'natural_language_description': 'NL.txt',
    'wrapper_api': 'Wrapper_api.js'
}

computed_dir = os.path.join(args.dir, "computed")
if not os.path.exists(computed_dir):
    os.makedirs(computed_dir)

def load_file_and_interpolate(filename):
    with open(filename) as file:
        result = file.read()
        for (name, filename) in to_interpolate.items():
            path = os.path.join(args.dir, filename)
            with open(path) as file:
                replacement = file.read()
            for to_replace in [ '[[' + name.upper() + '_GO_HERE]]', '[[' + name.upper() + '_GOES_HERE]]' ]:
                print(to_replace)
                result = result.replace(to_replace, replacement)
    return result

if args.method == 'nl':
    spec_prompt_filename = os.path.join(computed_dir, "Spec.prompt")
    file_path = os.path.join(file_dir, 'Spec_template.prompt')
    print(file_dir)
    print(file_path)
    with open(spec_prompt_filename, 'w') as file:
        file.write(load_file_and_interpolate(file_path))
    spec_filename = os.path.join(computed_dir, "Spec.tsl")
    synth_filename = os.path.join(computed_dir, "Synth.js")
    print(f'Please paste the contents of this file into the TSL GPT:\n\n    {spec_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {spec_filename}\n\nWhen you have done this, press Enter')
    input()
    check_call([ 'tsl', 'synthesize', '-i', spec_filename, '--js', '-o', synth_filename ])
else:
    spec_filename = os.path.join(args.dir, "Spec_template.tsl")
    raise Exception('the only method implemented is "nl". the others are TODO.')

impl_prompt_filename = os.path.join(computed_dir, 'Impl.prompt')
impl_filename = os.path.join(computed_dir, 'Impl.js')
impl_file_path = os.path.join(file_dir, 'Impl_template.prompt')
with open(impl_prompt_filename, 'w') as file:
    file.write(load_file_and_interpolate(impl_file_path))

print(f'Please paste the contents of this file into the TSL GPT:\n\n    {impl_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {impl_filename}\n\nWhen you have done this, press Enter')
