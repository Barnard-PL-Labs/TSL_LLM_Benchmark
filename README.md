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
- *NL.summary.txt*: The natural language, high-level summary of the benchmark.
- *NL.txt*: The natural language description of the benchmark with a clear list of requirements (Assumptions & Guarantees).
- *Headers.txt*: The function and predicate term header definitions.
- *wrapper_template.html*: The template html file that the LLM will implement from the *Impl.js* and *Synth.js* files that it generates.
- *computed*
    - *Spec.tsl*: The TSL specification that the LLM generates.
    - *Spec.prompt*: The prompt which is used to query the LLM for a TSL specification. It uses a template created in *run.py* and filled in by the information found in by *Headers.txt*, *NL.summary.txt*, and *NL.txt* in run.py.
    - *Impl.prompt*: The prompt which is used to query the LLM for a javascript implementation of the function and predicates. It uses a template created in *run.py* and filled in by the information found in *Headers.txt* and *wrapper_template.html*.
    - *Synth.js*: The javascript translation from the LLM generated TSL specification. This translation is performed by the [TSL API](https://barnard-pl-labs.github.io/tsl-api/).
    - *Impl.js*: The javascript function and predicate implementation generated from the LLM given the *Impl.prompt* prompt.
    - *<BENCMARK_NAME>.html*: The LLM generated html implementation 


## Creating a Benchmark
