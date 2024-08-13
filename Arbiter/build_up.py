import os
import random
import json
import subprocess
import time
import argparse

NUM_TRUCKS = 4
EXIT_ON_NUM_FAILURES = 10
EXIT_ON_NUM_SAME_CLAUSES = 1_000
RESULTS_DIR = None

def gen_clause():
	if random.random() < 0.5:
	    [ x, y, z ] = random.sample(range(1, NUM_TRUCKS + 1), 3)
	    return {
            "type": "x -> !y W z",
            "vars": [ x, y, z ],
            "nl": f"if truck {x} is granted, {y} must not be granted until {z} is",
            "tsl": f"([ g <- {x} ] -> ((! ([ g <- {y} ]) W [ g <- {z} ])));",
        }
	else:
		[ x, y, z ] = random.sample(range(1, NUM_TRUCKS + 1), 3)
		return {
            "type": "p y z && x -> !y W z",
            "vars": [ x, y, z ],
            "nl": f"if {y} wins the coinflip against {z} and {x} is granted, then {y} must not be granted until {z} is",
            "tsl": f"((p {y} {z}) && [ g <- {x} ] ->  ! ([ g <- {y} ]) W [ g <- {z} ]);",
        }

def clauses_to_program(clauses):
    all_eventually_request = " ".join(f"F(r {i}); " for i in range(1, NUM_TRUCKS + 1))
    python_is_bad = "\n            ".join(f"(r {i}) -> F ([ g <- {i} ]);" for i in range(1, NUM_TRUCKS + 1))
    clauses_str = "\n            ".join(sorted(clause['tsl'] for clause in clauses))
    return f"""
        always assume {{
          {all_eventually_request}
        }}
        always guarantee {{
            {python_is_bad}
            {clauses_str}
        }}
    """

def create_results_dir():
    global RESULTS_DIR
    while True:
        timestamp = int(time.time() * 1000)
        print('random seed:', timestamp)
        random.seed(timestamp)
        RESULTS_DIR = f"builtup/{timestamp}"
        try:
            os.makedirs(RESULTS_DIR)
            os.makedirs(f"{RESULTS_DIR}/test")
            os.makedirs(f"{RESULTS_DIR}/valid")
            break
        except FileExistsError:
            print(f"Warning: Folder {RESULTS_DIR} already exists. Trying again.")

def main(start_timestamp=None):
    global RESULTS_DIR
    
    if start_timestamp:
        RESULTS_DIR = f"builtup/{start_timestamp}"
        clauses = load_clauses_from_timestamp(start_timestamp)
    else:
        create_results_dir()
        clauses = []

    auto_incrementing_id = 0
    consecutive_failures = 0
    same_clauses = 0

    while consecutive_failures < EXIT_ON_NUM_FAILURES:
        new_clause = gen_clause()
        if new_clause in clauses:
            same_clauses += 1
            if EXIT_ON_NUM_SAME_CLAUSES < same_clauses:
                print(f"Exiting after {EXIT_ON_NUM_SAME_CLAUSES} times trying to add clauses that are already in the program.")
                return
            else:
                continue
        clauses.append(new_clause)
        program = clauses_to_program(clauses)
        
        auto_incrementing_id += 1
        test_file = f"{RESULTS_DIR}/test/{auto_incrementing_id}.tsl"
        
        with open(test_file, "w") as f:
            f.write(program)
        
        result = subprocess.run(["timeout", "60", "tsl", "synthesize", "-i", f"{auto_incrementing_id}.tsl", "--js"], 
                                cwd=f"{RESULTS_DIR}/test", 
                                capture_output=True)
        
        if result.returncode == 0:
            consecutive_failures = 0
            write_valid_result(clauses)
        else:
            print(result)
            clauses.pop()
            consecutive_failures += 1
    
    print(f"Exiting after {EXIT_ON_NUM_FAILURES} consecutive failures.")

def write_valid_result(clauses):
    num_clauses = len(clauses)
    
    with open(f"{RESULTS_DIR}/valid/{num_clauses}.json", "w") as f:
        json.dump(clauses, f)
    
    with open(f"{RESULTS_DIR}/valid/{num_clauses}.tsl", "w") as f:
        f.write(clauses_to_program(clauses))

def load_clauses_from_timestamp(timestamp):
    dir_path = f"builtup/{timestamp}/valid"
    json_files = [f for f in os.listdir(dir_path) if f.endswith('.json')]
    if not json_files:
        return []
    
    latest_file = max(json_files, key=lambda x: int(x.split('.')[0]))
    
    with open(os.path.join(dir_path, latest_file), 'r') as f:
        return json.load(f)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("timestamp", nargs="?", type=int, help="Optional timestamp to continue from")
    args = parser.parse_args()
    
    main(args.timestamp)
