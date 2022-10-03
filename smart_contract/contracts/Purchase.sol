// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Purchase {
    address public apato;
    struct purchaseAndRefund {
        uint256 amount;
        uint256 refund;
    }
    mapping(address => purchaseAndRefund) public balancesOfCustomer;

    constructor() {
        apato = msg.sender;
    }

    // payment
    function recieve() public payable {
        payable(apato).transfer(
            balancesOfCustomer[msg.sender].amount -
                balancesOfCustomer[msg.sender].refund
        );
        balancesOfCustomer[msg.sender].amount = 0;
    }

    function purchaseWithOutLuck() public payable {
        require(msg.value > .01 ether);
        balancesOfCustomer[msg.sender].amount = msg.value;
        recieve();
    }

    function purchaseWithLuck() public payable {
        require(msg.value > .01 ether);
        balancesOfCustomer[msg.sender].amount = msg.value;
    }

    // Money Back
    function amountOfMoneyBack(uint256 priceinWei)
        private
        view
        returns (uint256)
    {
        uint256 moneyPercentage;
        moneyPercentage = (priceinWei / (100)) * (random(30));
        return moneyPercentage;
    }

    function refund() public payable {
        uint256 finalMoneyBack;
        finalMoneyBack = amountOfMoneyBack(
            balancesOfCustomer[msg.sender].amount
        );
        balancesOfCustomer[msg.sender].refund = finalMoneyBack;
        payable(msg.sender).transfer(finalMoneyBack);
        recieve();

        // cleanup the amount to prevent recall to get more money.
        balancesOfCustomer[msg.sender].amount = 0;
    }

    function get_Refund_Percentage() public view returns (uint256) {
        return balancesOfCustomer[msg.sender].refund;
    }

    // function moneyBackTransaction()

    //   payable(msg.sender).transfer(moneyPercentage);

    function random(uint256 number) private view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.timestamp,
                        block.difficulty,
                        msg.sender
                    )
                )
            ) % number;
    }

    modifier apatoOnly() {
        require(msg.sender == apato);
        _;
    }
}
