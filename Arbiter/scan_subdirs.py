
"""

Prompt:

given a list of directories, list each full path subdirectory where the subdirectory is just digits (e.g. "123")

"""

import os
import re

def list_numeric_subdirs(directories):
    numeric_subdirs = []
    for directory in directories:
        for root, dirs, _ in os.walk(directory):
            for dir in dirs:
                if re.match(r'^\d+$', dir):
                    full_path = os.path.join(root, dir)
                    numeric_subdirs.append(full_path)
    return numeric_subdirs

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
result = list_numeric_subdirs(directories)
for path in result:
    print(path)
