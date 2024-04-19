# TSL LLM Benchmark
This README serves as an overview of the file organization of this repository and a walkthrough of how the benchmarks operate and the how the files are interrelated.


## File Organization
**Root Directory:** The files in the root directory are used for the generation of any state machine. For each particular state machine, there is a folder with the model-specific files. The state machines created each serve as a benchmark.
- *Impl_template.prompt*: The template to be filled in by *wrapper_template.html* and *Headers.txt* to create *Impl.prompt*.
- *run.py*: Runs the program. Takes files from a benchmark folder which aren't in the *computed* folder and creates the files of the *computed* folder. 
- *shotPrompt.txt*: A text file which is used to fine-tune GPT-4 in order for it to learn NL to TSL translation.
- *Spec_template.prompt*: The prompt template which is used as the query to the LLM in order to generate the TSL specification.

**Benchmark Folders:** The files within each folder (e.g. Ball, GameOfLife, etc.) are used to create that benchmark.
- *NL.summary.txt*: The natural language, high-level summary of the benchmark.
- *NL.txt*: The natural language description of the benchmark with a clear list of requirements (Assumptions & Guarantees).
- *Headers.txt*: The function and predicate term header definitions.
- *wrapper_template.html*: The template html file that the LLM will implement from the *Impl.js* and *Synth.js* files that it generates.
- *computed*: This folder contains files generated by the LLM (this is where the benchmark part comes in).
    - *Spec.tsl*: The TSL specification that the LLM generates.
    - *Spec.prompt*: The prompt which is used to query the LLM for a TSL specification.
    - *Impl.prompt*: The prompt which is used to query the LLM for a javascript implementation of the function and predicates.
    - *Synth.js*: The javascript translation from the LLM generated TSL specification. This translation is performed by the [TSL API](https://barnard-pl-labs.github.io/tsl-api/).
    - *<BENCHMARK_NAME>.html*: The LLM generated html implementation.


## Benchmark Walkthrough
1. *NL.txt*, *NL.summary.txt*, and *Headers.txt* are handmade and used to fill in *Spec_template.prompt* and create *Spec.prompt*, which is fed into the LLM. 
2. The LLM outputs *Spec.tsl*, its formulation of TSL.
3. This TSL specification is passed into the [TSL API](https://barnard-pl-labs.github.io/tsl-api/) and a javascript translation is stored in *Synth.js*. 
4. The handmade *Headers.txt* and *wrapper_template.html* are used to fill in *Impl_template.prompt* and create *Impl.prompt*, which is fed into the LLM.
5. The LLM outputs *Impl.js*, its javascript implementation of the functions and predicates. 
6. Finally, using *wrapper_template.html*, *Synth.js*, and *Impl.js*, the LLM fills in *<BENCHMARK_NAME>.html* for the final benchmark implementation.


### TODO: How are *wrapper_template.html* and *Headers.txt* used in *Impl_template.prompt* to create *Impl.prompt*? 