import json
import os
import argparse
from glob import glob

def build_nl(num_trucks, max_statement, folder):
    # Find the JSON file with the highest numeric argument
    json_files = glob(f"{folder}/valid/*.json")
    highest_num = max(int(os.path.splitext(os.path.basename(f))[0]) for f in json_files)
    
    # Choose the file to use
    file_to_use = min(highest_num, max_statement)
    json_file = f"{folder}/valid/{file_to_use}.json"
    
    # Read and process the JSON file
    with open(json_file, 'r') as f:
        data = json.load(f)
    
    # Sort the data by 'tsl' and extract 'nl' properties
    sorted_data = sorted(data, key=lambda x: x['tsl'])
    nl_statements = [item['nl'] for item in sorted_data]
    
    # Create NL.summary.txt
    with open(f"{folder}/NL.summary.txt", 'w') as f:
        f.write(f"There are {num_trucks} trucks going across a bridge. Sometimes they go one way on it, sometimes they go the other way. Only one truck can be on the bridge in a given timestep. Trucks request to go across the bridge, and they are given grants to go across the bridge by an arbiter. You are the arbiter, determining which trucks can go across the bridge.")
    
    # Create Headers.txt
    with open(f"{folder}/Headers.txt", 'w') as f:
        f.write("Cells:\n\t\"g\" is a cell that is set to the index of the truck that is granted a request to go across the road in this timestep\nPredicates:\n\t(r i) => this evaluates to true when truck \"i\" is requesting to go across the road in this timestep\n\t(p i j) => this returns true if truck \"i\" wins the coinflip against truck \"j\". this does not have any particular meaning, other than that two trucks have chosen to flip a coin against one another because they are bored.")
    
    # Create NL.txt
    with open(f"{folder}/NL.txt", 'w') as f:
        f.write(f"You should make {num_trucks} assumptions: every i in 1..{num_trucks}, truck i will eventually make a request to go across the bridge. You provide these {num_trucks} guarantees: each i in 1..{num_trucks}, if truck i makes a request to go across the bridge, eventually it will be granted access to the bridge. In addition, provide these {len(nl_statements)} guarantees:\n")
        for i, statement in enumerate(nl_statements, 1):
            f.write(f"{i}. {statement}\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Build NL files for truck bridge scenario")
    parser.add_argument("--dir", required=True, help="Directory to process")
    parser.add_argument("--n-truck", type=int, default=None, help="Number of trucks")
    parser.add_argument("--max-statement", type=int, default=1_000_000_000_000, help="Maximum statement number")
    args = parser.parse_args()

    num_trucks = args.n_truck if args.n_truck is not None else args.n_truck
    build_nl(num_trucks, args.max_statement, args.dir)
