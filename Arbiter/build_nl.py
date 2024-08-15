import os
import json
import argparse
from glob import glob

def build_nl(num_trucks, max_statement, folder):
    # Find the JSON file with the highest numeric argument
    json_files = glob(os.path.join(folder, "valid", "*.json"))
    highest_num = max(int(os.path.splitext(os.path.basename(f))[0]) for f in json_files)
    target_file = os.path.join(folder, "valid", f"{highest_num}.json")
    
    # Read the JSON file
    with open(target_file, 'r') as f:
        data = json.load(f)
    
    # Sort and limit the statements
    statements = sorted(data, key=lambda x: x['tsl'])[:min(highest_num, max_statement)]
    
    # Create NL.summary.txt
    with open(os.path.join(folder, "NL.summary.txt"), 'w') as f:
        f.write(f"There are {num_trucks} trucks going across a bridge. Sometimes they go one way on it, sometimes they go the other way. Only one truck can be on the bridge in a given timestep. Trucks request to go across the bridge, and they are given grants to go across the bridge by an arbiter. You are the arbiter, determining which trucks can go across the bridge.")
    
    # Create Headers.txt
    with open(os.path.join(folder, "Headers.txt"), 'w') as f:
        f.write("""Cells:
    "g" is a cell that is set to the index of the truck that is granted a request to go across the road in this timestep
Predicates:
    (r i) => this evaluates to true when truck "i" is requesting to go across the road in this timestep
    (p i j) => this returns true if truck "i" wins the coinflip against truck "j". this does not have any particular meaning, other than that two trucks have chosen to flip a coin against one another because they are bored.""")
    
    # Copy wrapper files
    script_dir = os.path.dirname(os.path.realpath(__file__))
    for file in ["wrapper_template.html", "Wrapper_api.js"]:
        src = os.path.join(script_dir, file)
        dst = os.path.join(folder, file)
        with open(src, 'r') as src_file, open(dst, 'w') as dst_file:
            dst_file.write(src_file.read())
    
    # Create NL.txt
    with open(os.path.join(folder, "NL.txt"), 'w') as f:
        f.write(f"You should make {num_trucks} assumptions: every i in 1..{num_trucks}, truck i will eventually make a request to go across the bridge. You provide these {num_trucks} guarantees: each i in 1..{num_trucks}, if truck i makes a request to go across the bridge, eventually it will be granted access to the bridge. In addition, provide these {len(statements)} guarantees:\n")
        for i, statement in enumerate(statements, 1):
            f.write(f"{i}. {statement['nl']}\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Bridge Traffic Control Script")
    parser.add_argument("--dir", required=True, help="Directory to process")
    parser.add_argument("--n-truck", type=int, default=3, help="Number of trucks")
    parser.add_argument("--max-statement", type=int, default=10, help="Maximum number of statements")
    args = parser.parse_args()

    build_nl(args.n_truck, args.max_statement, args.dir)
