# README

## Install dependencies

```bash
npm install
npm install truffle -g
npm install webpack webpack-cli -g
npm install ganache-cli -g
```

Install go-ipfs
`cd` to project folder

```bash
tar xvfz go-ipfs_v0.4.21_darwin-amd64.tar.gz
cd go-ipfs
./install.sh
ipfs init
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
```

## Build project

```bash
npm run build
```

## Run ganache

In terminal 1

```bash
ganache-cli -h 0.0.0.0 -p 7777 -d -l 200000000 -g
```

## Run Ipfs

In terminal 2
Run ipfs daemon

```bash
ipfs daemon
```

## Run server

In terminal 3

```bash
npm run server
```

Open page at <http://localhost:3000/>