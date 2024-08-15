import os
import csv
import pandas as pd


def count_lines_in_file(file_path):
    try:
        with open(file_path, "r") as file:
            lines = file.readlines()
            non_empty_lines = [line for line in lines if line.strip()]
            return len(non_empty_lines)
    except FileNotFoundError:
        print(f"File {file_path} not found.")
        return 0


def analyze_tasks(target_dir):
    # Prepare the data structure to hold the statistics for all tasks
    all_stats = []

    # Iterate through each subdirectory in the target directory
    for sub_dir_name in os.listdir(target_dir):
        sub_dir_path = os.path.join(target_dir, sub_dir_name)

        if os.path.isdir(sub_dir_path):  # Ensure it's a directory
            # Determine the suffix for the task name based on sub_dir_name (nl or nls)
            task_prefix = "_nl" if "nl_" in sub_dir_name else "_nls"
            task_suffix = "_no_regen" if not "_no_" in sub_dir_name else "_regen"

            # Navigate through each task folder in the subdirectory
            for task_name in os.listdir(sub_dir_path):
                task_path = os.path.join(sub_dir_path, task_name)

                if os.path.isdir(task_path):  # Ensure it's a directory
                    # Initialize the counts
                    html_line_count = 0
                    synth_js_line_count = 0

                    # Iterate through the files in the task folder
                    task_dir = os.path.join(
                        task_path, "Spec_template.prompt/gpt-4-turbo"
                    )
                    for run_dir in os.listdir(task_dir):
                        for file_name in os.listdir(os.path.join(task_dir, run_dir)):
                            file_path = os.path.join(task_dir, run_dir, file_name)

                            # Check for the HTML file and count its lines
                            if file_name.endswith(".html"):
                                html_line_count = count_lines_in_file(file_path)

                            # Check for the Synth.js file and count its lines
                            elif file_name == "Synth.js" and task_suffix == "_no_regen":
                                synth_js_line_count = count_lines_in_file(file_path)

                            # Append the results to the all_stats list with the suffix in task name
                            all_stats.append(
                                {
                                    "Task": task_name + task_prefix + task_suffix,
                                    "HTML Line Count": html_line_count,
                                    "Synth.js Line Count": synth_js_line_count,
                                }
                            )

    # Write the combined statistics to a single CSV file
    csv_file_path = os.path.join(target_dir, "all_task_statistics.csv")
    with open(csv_file_path, "w", newline="", encoding="utf-8") as csv_file:
        writer = csv.DictWriter(
            csv_file, fieldnames=["Task", "HTML Line Count", "Synth.js Line Count"]
        )
        writer.writeheader()
        for row in all_stats:
            writer.writerow(row)

    print(f"All statistics have been written to {csv_file_path}")
    return csv_file_path


# Replace 'your/target/directory/path' with the actual path to the main target directory
target_directory = "/Users/nikh/Columbia/research/TSL_LLM_Benchmark/results"

# Run the analysis
pth = analyze_tasks(target_directory)

df = pd.read_csv(pth)

# Group by the 'Task' column and calculate the average for each group
df = df.groupby("Task").mean()

df["Total Line Count"] = df["HTML Line Count"] + df["Synth.js Line Count"]

# Add a new column for Percentage of Synthesized Lines
df["Synthesized Line Percentage"] = (
    df["Synth.js Line Count"] / df["Total Line Count"]
) * 100


# If you want to see the result
print(df)
