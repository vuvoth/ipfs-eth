pragma solidity ^0.5.0;

contract Balance {

  mapping(address => uint) public wallet;

  constructor(address[] memory users) public {
    for (uint i = 0; i < users.length; ++i) {
      wallet[users[i]] = 10000;
    }
  }

  function transfer(address from, address to, uint token) public {
    wallet[from] -= token;
    wallet[to] += token;
  }

  function getBalance(address user) public view returns(uint) {
    return wallet[user];
  }
}
