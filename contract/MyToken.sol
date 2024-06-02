// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC1155, Ownable {
    // This will automatically be appeared as contract name.
    string public name = "My ERC1155 NFT";

    constructor(address initialOwner, string memory uri_, string memory initContractName_) ERC1155(uri_) Ownable(initialOwner) {
        name = initContractName_;
    }

    function setContractName(string memory newname) public onlyOwner {
        name = newname;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data) public virtual {
       _mint(account,id, amount, data);
    }

}