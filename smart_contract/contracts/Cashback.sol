// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Cashback {
    address public apato; //why can't => address payable public apato?
    address payable public customer;

    constructor() {
        apato = msg.sender;
    }

    //https://docs.chain.link/docs/vrf/v2/best-practices/#getting-a-random-number-within-a-range


    function amountOfMoney() public payable {
        require(msg.value > .01 ether);
        msg.value * random(100, 0.5)
        apato = payable(msg.sender);
    }

    function moneyToCustomer() public payable {
        payable(customer).transfer(address(this).balance);
    }

    function random(uint number) public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty,  
        msg.sender))) % number;
    }
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
