#!/bin/bash -eu

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT
dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
# make aliases work in the script
shopt -s expand_aliases
source ~/.bashrc

run_command() {
    while true; do
        python build_up.py
        sleep 0.1
    done
}

# Start 8 background processes
for i in {1..6}; do
    run_command &
    sleep 0.1
done

wait
