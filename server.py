
from flask import Flask, request, jsonify, send_from_directory
import os
import json
from datetime import datetime
import importlib.util

app = Flask(__name__)

@app.route('/run', methods=['POST'])
def run_endpoint():
    data = request.json
    run_data = data.get('run', {})
    
    timestamp = datetime.now().strftime('%Y%m%d%H%M%S%f')
    exp_dir = f"Temp_Experiment/{timestamp}"
    os.makedirs(exp_dir, exist_ok=True)
    
    for filename, content in run_data.get('files', {}).items():
        with open(os.path.join(exp_dir, filename), 'w') as f:
            f.write(content)
    
    spec = importlib.util.spec_from_file_location("run", "run.py")
    run_module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(run_module)
    
    args = {
        "dir": exp_dir,
        "spec_prompt_file": run_data.get("spec_prompt_file", "Spec_template.prompt"),
        "lang": run_data.get("lang", "JavaScript"),
        "method": run_data.get("method", "nl"),
    }
    
    run_module.run_with_args(run_module.RunExperimentArgs(**args))
    
    result_file = f"{exp_dir}/{timestamp}.html"
    if os.path.exists(result_file):
        with open(result_file, 'r') as f:
            return jsonify({"html": f.read()})
    else:
        return jsonify({"error": f"no such file {timestamp}/{timestamp}.html"}), 404

@app.route('/get-benchmark/<path:benchmark_name>')
def get_benchmark(benchmark_name):
    benchmark_dir = benchmark_name
    if not os.path.isdir(benchmark_dir):
        return jsonify({"error": "Benchmark directory not found"}), 404
    
    benchmark_files = {}
    for filename in os.listdir(benchmark_dir):
        file_path = os.path.join(benchmark_dir, filename)
        if os.path.isfile(file_path):
            with open(file_path, 'r') as f:
                benchmark_files[filename] = f.read()
    
    return jsonify(benchmark_files)

@app.route('/')
def serve_frontend():
    return send_from_directory('frontend', 'index.html')

@app.route('/asset/<path:filename>')
def serve_asset(filename):
    return send_from_directory('frontend/asset', filename)

if __name__ == '__main__':
    app.run(debug = True)
