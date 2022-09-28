// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Purchase {
    address public apato;
    address payable public customer;

    constructor() {
        apato = msg.sender;
    }

    function recieve() public payable {
        payable(apato).transfer(address(this).balance);
    }

    function purchase() public payable {
        require(msg.value > .01 ether);
        customer = payable(msg.sender);
        recieve();
    }
}
