import subprocess
import os
import signal
import concurrent.futures
import time

def run_command():
    while True:
        subprocess.Popen(["python", "build_up.py"], preexec_fn = os.setpgrp)
        time.sleep(1)  # Add a small delay to prevent spinning too fast

if __name__ == "__main__":
    with concurrent.futures.ProcessPoolExecutor(max_workers = 8) as executor:
        futures = []
        for _ in range(8):
            futures.append(executor.submit(run_command))
            time.sleep(0.01)
        
        try:
            concurrent.futures.wait(futures)
        except KeyboardInterrupt:
            print("Terminating workers")
