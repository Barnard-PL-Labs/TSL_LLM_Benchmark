import os
import csv
import json
import argparse
from typing import List, Tuple

def count_lines(file_path: str) -> int:
    with open(file_path, 'r') as file:
        return sum(1 for line in file if line.strip() and not line.lstrip().startswith(('#', '//')))

def process_directory(directory: str, filename: str) -> List[Tuple[str, int]]:
    results = []
    for root, dirs, files in os.walk(directory):
        if filename in files:
            file_path = os.path.join(root, filename)
            line_count = count_lines(file_path)
            subdirectory = os.path.relpath(root, directory)
            results.append((subdirectory, line_count))
    return results

def write_csv(output_file: str, data: List[Tuple], headers: List[str]):
    with open(output_file, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(headers)
        writer.writerows(data)
    print(f"Wrote data to {output_file}")

def main(directory: str, filename: str):
    results = process_directory(directory, filename)
    write_csv('line_counts.csv', results, ['Subdirectory', 'Line Count'])

def process_benchmarks():
    with open('benchmarks.json', 'r') as f:
        benchmarks = json.load(f)

    all_results = []
    avg_results = {}

    for benchmark in benchmarks:
        for prompt_type, prompt_dir in [("Spec_template", "Spec_template.prompt"), ("No_tsl", "No_tsl.prompt")]:
            directory = f"results/by_benchmark/{benchmark}/{prompt_dir}"
            filename = "Spec.tsl" if prompt_type == "Spec_template" else "Impl.js"
            
            results = process_directory(directory, filename)
            for subdirectory, line_count in results:
                all_results.append((benchmark, prompt_type, subdirectory, line_count))
            
            avg_line_count = sum(count for _, count in results) / len(results) if results else 0
            avg_results.setdefault(benchmark, {})[prompt_type] = avg_line_count

    write_csv('line_counts.csv', all_results, ['Benchmark', 'Prompt Type', 'Subdirectory', 'Line Count'])

    avg_results_list = [(benchmark, prompt_type, avg_count) 
                        for benchmark, prompt_types in avg_results.items() 
                        for prompt_type, avg_count in prompt_types.items()]
    write_csv('average_line_counts.csv', avg_results_list, ['Benchmark', 'Prompt Type', 'Average Line Count'])

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Count lines in files across subdirectories.")
    parser.add_argument("--dir", help="Directory to process")
    parser.add_argument("--filename", help="Filename to look for in subdirectories")
    args = parser.parse_args()

    if args.dir and args.filename:
        main(args.dir, args.filename)
        print(f"Processed directory {args.dir} for file {args.filename}")
    else:
        process_benchmarks()
        print("Processed benchmarks from benchmarks.json")
