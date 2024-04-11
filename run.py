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

def load_file_and_interpolate(filename):
    with open(filename) as file:
        result = file.read()
        for (name, filename) in to_interpolate.items():
            path = args.dir + '/' + filename
            with open(path) as file:
                replacement = file.read()
            for to_replace in [ name.upper() + '_GO_HERE', name.upper() + '_GOES_HERE' ]:
                result.replace(to_replace, replacement)
    return result

if args.method == 'nl':
    spec_prompt_filename = args.dir + '/computed/Spec.prompt'
    with open(spec_prompt_filename, 'w') as file:
        file.write(load_file_and_interpolate(file_dir + '/Spec.prompt'))
    spec_filename = args.dir + '/computed/Spec.tsl'
    synth_filename = args.dir + '/computed/Synth.js'
    print(f'Please paste the contents of this file into the TSL GPT:\n\n    {spec_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {spec_filename}\n\nWhen you have done this, press Enter')
    input()
    check_call([ 'tsl', 'synthesize', '-i', spec_filename, '--js', '-o', synth_filename ])
else:
    spec_filename = args.dir + '/Spec.tsl'
    raise Exception('the only method implemented is "nl". the others are TODO.')

impl_prompt_filename = args.dir + '/computed/Impl.prompt'
impl_filename = args.dir + '/computed/Impl.js'
with open(impl_prompt_filename, 'w') as file:
    file.write(load_file_and_interpolate(file_dir + '/Impl.prompt'))

print(f'Please paste the contents of this file into the TSL GPT:\n\n    {impl_prompt_filename}\n\nThen, paste the spec in the response into:\n\n    {impl_filename}\n\nWhen you have done this, press Enter')

