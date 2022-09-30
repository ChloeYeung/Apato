// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Cashback {
    address public apato; //why can't => address payable public apato?
    address payable public customer;
    
    constructor() {
        apato = msg.sender;
    }
    
    function amountOfMoney() public payable {
        require(msg.value > .01 ether);
        apato = payable(msg.sender);
    }

    function moneyToCustomer() public payable {
        payable(customer).transfer(address(this).balance);
    }
    
    // function random() private view returns (uint) {
    //     return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, 1000)));
    // }
    
    // function pickWinner() public restricted {
    //     uint index = random() % customer.length;
    //     customer[index].transfer(address(this).balance);
    //     customer = new address payable[](0);
    // }
    
    // modifier restricted() {
    //     require(msg.sender == apato);
    //     _;
    // }
    
    // function getCustomer() public view returns (address payable[] memory) {
    //     return customer;
    // }
}   