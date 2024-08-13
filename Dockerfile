from ubuntu:24.10

run apt-get update
run apt-get install -y python3 python3-pip

workdir /app
copy . /app
run pip3 install --no-cache-dir -r requirements.txt

expose 80
cmd ["python", "server.py"]
