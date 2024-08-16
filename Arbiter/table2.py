import os
import sys
import csv
import argparse
from pathlib import Path

def count_non_blank_non_comment_lines(file_path):
    with open(file_path, 'r') as file:
        return sum(1 for line in file if line.strip() and not line.strip().startswith('//'))

def analyze_directory(n, model=None):
    base_dir = Path(f"../results/by_benchmark/builtup")
    n_dir = f"N_{model}" if model else str(n)
    
    total_subdirs = 0
    successful_subdirs = 0
    total_synth_lines = 0
    
    for subdir in os.listdir(base_dir):
        subdir_path = base_dir / subdir / n_dir / "Spec_template.prompt"
        if not subdir_path.is_dir():
            continue
        
        total_subdirs += 1
        has_error = False
        
        for subdir2 in os.listdir(subdir_path):
            err_log_path = subdir_path / subdir2 / "err.log"
            bad_txt_path = subdir_path / subdir2 / "bad.txt"
            
            if bad_txt_path.exists():
                has_error = True
                break
            
            if err_log_path.exists():
                with open(err_log_path, 'r') as err_file:
                    if any("returned non-zero exit status 1" in line and "synthesize" in line for line in err_file):
                        has_error = True
                        break
        
        if not has_error:
            successful_subdirs += 1
            synth_js_path = subdir_path / subdir2 / "Spec.tsl"
            if synth_js_path.exists():
                total_synth_lines += count_non_blank_non_comment_lines(synth_js_path)
    
    avg_synth_lines = total_synth_lines / successful_subdirs if successful_subdirs > 0 else 0
    p = successful_subdirs / total_subdirs if total_subdirs > 0 else 0
    stderr = (p * (1 - p) / total_subdirs) ** 0.5 if total_subdirs > 0 else 0
    
    return n, total_subdirs, successful_subdirs, p, stderr, avg_synth_lines

def main():
    parser = argparse.ArgumentParser(description="Analyze directory structure and generate statistics.")
    parser.add_argument("--n-statement", type=int, help="The N value to analyze")
    parser.add_argument("--model", type=str, help="Model name for directory reference")
    args = parser.parse_args()

    if args.n_statement:
        results = [analyze_directory(args.n_statement, args.model)]
    else:
        results = [analyze_directory(n, args.model) for n in [10, 20, 30]]

    model_name = args.model if args.model else "default"
    csv_filename = f"table2_{model_name}.csv" if args.model else "table2.csv"

    with open(csv_filename, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Model', 'N', 'Trials (M)', 'Successful', 'p', 'stderr', 'Avg Spec.tsl Lines'])
        for result in results:
            writer.writerow([model_name] + list(result))

    print(f"Results written to {csv_filename}")

if __name__ == "__main__":
    main()
