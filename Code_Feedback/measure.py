
import subprocess
import tempfile
import re

def measure(code_str):
    with tempfile.NamedTemporaryFile(mode='w+', delete=False) as tmp_file:
        tmp_file.write(code_str)
        tmp_file.flush()
        command = f"radon cc -s {tmp_file.name}"
        print(command)
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
    
    # Parse the output
    print(result)
    lines = result.stdout.split('\n')
    pairs = []
    pattern = r"\s+[A-Z]\s+\d+:\d+\s+(\w+)\s+-\s+\w+\s+\((\d+)\)\s*"
    for line in lines:
        match = re.search(pattern, line)
        if match:
            identifier = match.group(1)
            score = int(match.group(2))
            pairs.append([identifier, score])
    
    return pairs

print(measure(open('test.py').read()))
