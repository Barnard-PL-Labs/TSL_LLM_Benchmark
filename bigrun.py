import os
import subprocess
import pandas as pd


bigargs = {
    "tries": 7,
    "tsl": ["nl"],
    # "tsl": ["nl"],
    # "tasks": ["Cube_Rotation"],
    "tasks": ["GameOfLife"],  # , "invaders", "Vending"],
    # "models": ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo", "gpt-4", "gpt-3.5-turbo"],
    "models": ["gpt-4-turbo"],
    "trusted": [True],
}

# bigargs = {
#     "tries": 1,
#     "tsl": ["nls"],
#     "tasks": ["Ball"],
#     "models": ["gpt-3.5-turbo"],
# }


def count_lines_in_file(file_path):
    try:
        with open(file_path, "r") as file:
            lines = file.readlines()
            non_empty_lines = [line for line in lines if line.strip()]
            return len(non_empty_lines)
    except FileNotFoundError:
        print(f"File {file_path} not found.")
        return 0


def grade(task, tslllm, num_try, save_dir):
    t_verif, t_unverif, p_unverif = 0, 0, 0
    html_path = os.path.join(save_dir, f"{task}.html")
    synth_path = os.path.join(save_dir, "Synth.js")

    total_lines_html = -1
    total_lines_synth = -1

    if tslllm == "nls":
        p_unverif = 1.0
        t_unverif = count_lines_in_file(html_path)
        total_lines_html = t_unverif
    elif tslllm == "nl":
        t_unverif = count_lines_in_file(html_path)
        t_verif = count_lines_in_file(synth_path)
        total_lines_html = t_unverif
        total_lines_synth = t_verif
        if t_unverif + t_verif > 0:
            p_unverif = t_verif / (t_unverif + t_verif)
        else:
            p_unverif = 0

    return (
        num_try,
        total_lines_html,
        total_lines_synth,
        t_verif,
        t_unverif,
        p_unverif,
        tslllm,
    )


def check_only(res_dir="results"):
    pass
    subdir = "Spec_template.prompt"


def run_command_with_retry(command, retries=1):
    for attempt in range(retries):
        try:
            result = subprocess.run(
                command,
                check=True,
                capture_output=True,
                text=True,
            )

            if result.stderr:
                print(f"Attempt {attempt + 1} failed with non-zero exit status 1.")
                if attempt < retries - 1:
                    print("Retrying...")
                    continue
                else:
                    print("All attempts failed.")
                    raise subprocess.CalledProcessError(
                        result.returncode,
                        command,
                        output=result.stdout,
                        stderr=result.stderr,
                    )
            return result
        except subprocess.CalledProcessError as e:
            print(f"Attempt {attempt + 1} failed:")
            print(e.stderr)
            if attempt < retries - 1:
                print("Retrying...")
            else:
                print("All attempts failed.")
                raise


# TODO make model list and dir list to do this cleverly
def run_command_and_check(bigargs):

    results = {}

    for task in bigargs["tasks"]:
        for trust in bigargs["trusted"]:
            task_key = f"{task}_{trust}"
            results[task_key] = []
            for model in bigargs["models"]:
                for t in bigargs["tsl"]:
                    for i in range(bigargs["tries"]):
                        command = [
                            "python",
                            "run.py",
                            "-d",
                            task,
                            "-m",
                            t,
                            "--model",
                            model,
                            "--llmtsl",
                            t,
                            "--regen-html",
                        ]
                        if trust:
                            command.append("--trusted")

                        try:
                            # result = run_command_with_retry(command, retries=1)
                            result = subprocess.run(
                                command,
                                check=True,
                                capture_output=True,
                                text=True,
                            )

                            print("Command executed successfully:")
                            save_dir = result.stdout.strip().splitlines()[-1]

                            grade_obj = grade(
                                task=task, tslllm=t, num_try=i, save_dir=save_dir
                            )

                            results[task_key].append(grade_obj)
                        except subprocess.CalledProcessError as e:
                            print("An error occurred while executing the command:")
                            print(e.stderr)
        print(results)

    return results


def results_to_dataframe(results):
    flat_results = []
    for task, grades in results.items():
        for grade in grades:
            flat_results.append(
                {
                    "task": f"{task}_{grade[6]}",
                    "num_try": grade[0],
                    "total_lines_html": grade[1],
                    "total_lines_synth": grade[2],
                    "t_verif": grade[3],
                    "t_unverif": grade[4],
                    "p_unverif": grade[5],
                }
            )

    df = pd.DataFrame(flat_results)
    return df


# Example usage after running your `run_command_and_check`
if __name__ == "__main__":
    results = run_command_and_check(bigargs=bigargs)
    df = results_to_dataframe(results)
    df.to_csv("results.csv", index=False)
    avg_df = df.groupby("task").mean().reset_index()
    avg_df.to_csv("avg_results.csv", index=False)
