const Ipfs = require('ipfs-http-client')

const Web3 = require('web3')

const web3 = new Web3("ws://localhost:7777")

const account = "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1"

const TxConfig = {
  from: account,
  gas: 200000000
}

const artifact = require('../build/contracts/NameIpfs.json')

var contract; 


var ipfs = Ipfs('localhost', '5001', { protocol: 'http' })

async function addData(content) {
  let result = await ipfs.add(Buffer.from(content))
  return result[0].hash;
}

async function getData(hash) {
  let result = await ipfs.cat(hash)
  result = result.toString()
  return result
}

async function deployContract(args, config) {
  let contract = await new web3.eth.Contract(artifact.abi);
  return await contract.deploy({
    data: artifact.bytecode,
    arguments: args
  }).send(config)
}

async function getNameWithIpfs() {
  // get ipfs hash 
  hash = await contract.methods.getName().call(TxConfig)

  return await getData(hash) // decode and return 
}

async function setNameWithIpfs(params) {
  // add data to ipfs 
  hash = await addData(params)
  // update name
  await contract.methods.setName(hash).send(TxConfig);
}

async function getNameHash() {
  return await contract.methods.getName().call(TxConfig)
}

async function setNameHash(data) {
  await contract.methods.setName(data).send(TxConfig);
}

async function main() {
  // deploy contract with hash of 'Vo Thanh Vu'
  let hash = await addData('Vo Thanh Vu')
  contract = await deployContract([hash], TxConfig)
  
}

window.getNameWithIpfs = getNameWithIpfs 
window.setNameWithIpfs = setNameWithIpfs 
window.getNameHash = getNameHash 
window.setNameHash = setNameHash

main()