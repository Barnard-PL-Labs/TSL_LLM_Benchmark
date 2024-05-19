
import os
import argparse
from subprocess import check_output, call
import subprocess

parser = argparse.ArgumentParser(description = "Process a benchmark argument.")
parser.add_argument("benchmark", type = str, help = "Name of the benchmark to process")
args = parser.parse_args()

script_dir = os.path.dirname(os.path.abspath(__file__))

for spec_prompt_file in os.listdir(os.path.join(script_dir, 'results', 'by_benchmark', args.benchmark)):
	for timestamp in os.listdir(os.path.join(script_dir, 'results', 'by_benchmark', args.benchmark, spec_prompt_file)):
		result_dir = os.path.join(script_dir, 'results', 'by_benchmark', args.benchmark, spec_prompt_file, timestamp)
		if all(not os.path.exists(os.path.join(result_dir, filename)) for filename in [ 'err.log', 'good.txt', 'bad.txt' ]):
			def get_yes_no_input(prompt="Please enter 'y' or 'n', or 's' to see the spec again: "):
			    while True:
			        user_input = input(prompt).strip().lower()
			        if user_input in ['y', 'n']:
			            return user_input == 'y'
			        if user_input == 's':
			        	subprocess.call([ 'less', os.path.join(result_dir, 'Spec.tsl') ])
			        print("Invalid input. Please only enter 'y' or 'n'.")
			subprocess.call([ 'less', os.path.join(result_dir, 'Spec.tsl') ])
			print("Does this spec accurately reflect the benchmark?")
			good = get_yes_no_input()
			if good:
				check_output([ 'touch', os.path.join(result_dir, 'good.txt') ])
			else:
				check_output([ 'touch', os.path.join(result_dir, 'bad.txt') ])
