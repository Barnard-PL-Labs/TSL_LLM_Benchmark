
import os
from collections import defaultdict

file_path = os.path.dirname(os.path.abspath(__file__))

results = {}

for benchmark in os.listdir(os.path.join(file_path, 'results/by_benchmark')):
	for spec_prompt_file in os.listdir(os.path.join(file_path, 'results/by_benchmark', benchmark)):
		print(os.path.join(file_path, 'results/by_benchmark', benchmark, spec_prompt_file))
		benchmark_prompt_path = os.path.join(file_path, 'results/by_benchmark', benchmark, spec_prompt_file)
		key = (benchmark, spec_prompt_file)
		print('benchmark_prompt_path', benchmark_prompt_path)
		for timestamp in os.listdir(benchmark_prompt_path):
			path = os.path.join(benchmark_prompt_path, timestamp)
			results[key] = {
				'benchmark': benchmark,
				'prompt': spec_prompt_file,
				'total': 1,
				'compiled': 0,
				'correct': 0,
				'unclassified': 0,
				'total': 0
			}
			if not os.path.exists(os.path.join(path, 'err.log')):
				results[key]['compiled'] += 1
				if os.path.exists(os.path.join(path, 'good.txt')):
					results[key]['correct'] += 1
				elif not os.path.exists(os.path.join(path, 'bad.txt')):
					results[key]['unclassified'] += 1

import pandas as pd

df = pd.DataFrame(results.values())

df.to_csv('results.csv')
