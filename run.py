#!/usr/bin/env python3

"""

This is a work in progress

"""

import argparse

parser = argparse.ArgumentParser(description="Generate a program using TSL")
parser.add_argument('-d', '--dir', required=True, help='Directory of the prompts to generate from')
parser.add_argument('-m', '--method', choices=['nl', 'nl+spec', 'nl+spec+synth'], help='"nl" means generate using only the natural language promps, "nl+spec" means also use the TSL spec, and "nl+spec+synth" means also use the synthesized code.')

args = parser.parse_args()

to_interpolate = {
    'functions_and_predicates': 'Headers.txt',
    'natural_language_summary': 'NL.summary.txt',
    'natural_language_description': 'NL.txt',
}

# def should_use_original(name):
#     return (
#         name in [ 'NL.summary.txt', 'functions_and_predicates' ] ||
#         args.method == 'nl' && 'functions_and_predicates' ||
#         args.emthod

def load_file_and_interpolate(filename):
    with open(filename) as file:
        result = file.read()
        for (name, filename) in to_interpolate.items():
            if should_use_original(name):
                path = args.dir + '/' + filename
            else:
                path = args.dir + '/computed/' + filename
            with open(path) as file:
                replacement = file.read()
            for to_replace in [ name.upper() + '_GO_HERE', name.upper() + '_GOES_HERE' ]:
                result.replace_all(to_replace, replacement)
    return result

"""

tsl synthesize -i TSL_LLM_Benchmark/llm-descriptions/Ball/computed/Spec.tsl --js -o TSL_LLM_Benchmark/llm-descriptions/Ball/computed/Synth.js

"""
