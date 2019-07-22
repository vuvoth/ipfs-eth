pragma solidity ^0.5.0;

contract NameIpfs {

  string name;

  constructor(string memory _name) public {
    name = _name;
  }

  function setName(string memory _name) public {
    name = _name;
  }

  function getName() public view returns(string memory) {
    return name;
  }

}
