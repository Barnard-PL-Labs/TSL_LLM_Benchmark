# TSL LLM Benchmark
This README serves as an overview of the file organization of this repository and a walkthrough of how the benchmarks are created and the files interrelated.


## File Organization
**Root Directory:** The files in the root directory are used for the generation of any state machine. For each particular state machine, there is a folder with the model-specific files. The state machines created each serve as a benchmark.
- *Impl_template.prompt*: Here
- *run.py*: Here
- *shotPrompt.txt*: Here
- *Spec_template.prompt*: Here
- *README.md*: This README.
- *README.mov*: A tutorial of the README. **TODO: DOES THIS NEED TO BE CHANGED?**

**Within Each Benchmark Folder:** The files within each folder (e.g. Ball, GameOfLife, etc.) are used to create that benchmark.
- *NL.summary.txt*: Here
- *NL.txt*: Here
- *Headers.txt*:
- *wrapper_template.html*:
- *computed*
    - *Spec.tsl*:
    - *Spec.prompt*:
    - *Impl.prompt*:
    - *Synth.js*:
    - *Impl.js*:
    - ***<BENCMARK_NAME>**.html*:



1. NL.summary.txt - natural language high-level summary
2. NL.txt - natural language description with clear list of requirements
3. Headers.txt - function+pred term headers to define
4. Wrapper_api.js - the wrapper api (javascript functions) that the LLM is supposed to use to implement the body of the functions + predicates
5. Spec.tsl - the hand-written spec (to be compared against the computer-generated one)

## Creating a Benchmark