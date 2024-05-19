
import os
from collections import defaultdict

file_path = os.path.dirname(os.path.abspath(__file__))

results = {}

for benchmark in os.listdir(os.path.join(file_path, 'results/by_benchmark')):
	for spec_prompt_file in os.listdir(os.path.join(file_path, 'results/by_benchmark', benchmark)):
		benchmark_prompt_path = os.path.join(file_path, 'results/by_benchmark', benchmark, spec_prompt_file)
		key = (benchmark, spec_prompt_file)
		results[key] = {
			'benchmark': benchmark,
			'prompt': spec_prompt_file,
			'total': 1,
			'compiled': 0,
			'correct': 0,
			'unclassified': 0,
			'total': 0
		}
		for timestamp in os.listdir(benchmark_prompt_path):
			results[key]['total'] += 1
			path = os.path.join(benchmark_prompt_path, timestamp)
			if not (os.path.exists(os.path.join(path, 'err.log')) and open(os.path.join(path, 'err.log')).read().startswith("""Command '['tsl', 'synthesize'""")):
				results[key]['compiled'] += 1
				if os.path.exists(os.path.join(path, 'good.txt')):
					results[key]['correct'] += 1
				elif not os.path.exists(os.path.join(path, 'bad.txt')):
					results[key]['unclassified'] += 1

import pandas as pd

df = pd.DataFrame(results.values())

df.to_csv('results.csv')
print('Results collected into results.csv')
