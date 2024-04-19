import os
import json
import shutil


def find_and_copy_files(directory, p_file_name, t_file_name, output_json_file):
    json_data = []
    jobj = {}

    for root, dirs, files in os.walk(directory):
        for file in files:

            if file == p_file_name:
                file_path = os.path.join(root, file)
                with open(file_path, "r") as f:

                    file_contents = f.read()

                jobj["prompt"] = file_contents
                # json_data.append({"prompt": file_contents})

            elif file == t_file_name:
                file_path = os.path.join(root, file)
                with open(file_path, "r") as f:

                    file_contents = f.read()

                jobj["tsl"] = file_contents
                json_data.append(jobj)
                # json_data.append({"tsl": file_contents})

    with open(output_json_file, "w") as json_file:
        json.dump(json_data, json_file, indent=4)

    print("JSON file created successfully!")


directory_to_search = "../"

p_file_name = "Spec.prompt"
t_file_name = "Spec.tsl"

output_json_file = "output.json"

find_and_copy_files(directory_to_search, p_file_name, t_file_name, output_json_file)
