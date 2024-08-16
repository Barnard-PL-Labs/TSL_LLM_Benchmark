
import os
import shutil
import json

def process_directories(dir_list):
    for directory in dir_list:
        valid_dir = os.path.join(directory, "valid")
        
        if not os.path.exists(valid_dir):
            print(f"'valid' subdirectory not found in {directory}. Skipping.")
            continue
        
        for filename in os.listdir(valid_dir):
            if filename.endswith(".json"):
                # Create new folder name (remove .json extension)
                new_folder_name = os.path.splitext(filename)[0]
                new_folder_path = os.path.join(directory, new_folder_name)
                
                # Create the new folder structure
                new_valid_dir = os.path.join(new_folder_path, "valid")
                os.makedirs(new_valid_dir, exist_ok=True)
                
                # Copy the JSON file to the new location
                src_file = os.path.join(valid_dir, filename)
                dst_file = os.path.join(new_valid_dir, filename)
                shutil.copy2(src_file, dst_file)
                
                print(f"Processed {filename} in {directory}")

# Example usage
directories = [
    "builtup/1723725182997",
    "builtup/1723725378294",
    "builtup/1723725494789",
    "builtup/1723725646893",
    "builtup/1723725778514",
    "builtup/1723725930979",
    "builtup/1723726065657",
    "builtup/1723726956968",
    "builtup/1723727006482",
    "builtup/1723727006483",
    "builtup/1723727006484",
    "builtup/1723727006485",
    "builtup/1723727006486",
    "builtup/1723727006487",
    "builtup/1723727006488",
    "builtup/1723727006489",
    "builtup/1723727006490",
    "builtup/1723727006495",
    "builtup/1723727172742",
    "builtup/1723727174488",
    "builtup/1723727201931",
    "builtup/1723727203931",
    "builtup/1723727205769",
    "builtup/1723727212855",
]
process_directories(directories)