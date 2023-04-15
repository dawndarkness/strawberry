// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./Ownable.sol";
import "./StrawberryDonorFactory.sol";

contract StrawberryCharity is Ownable, StrawberryDonorFactory {
    struct Donation {
        uint256 value;
        uint256 date;
    }

    string public name;
    string public image;
    string public description;
    address payable public beneficiary;
    uint256 public donationsCount = 0;

    mapping(address => Donation[]) public _donations;

    event DonationReceived(address indexed donor, uint256 value);
    event Withdraw(uint256 amount);

    constructor(
        string memory _name,
        string memory _image,
        string memory _description,
        address payable _beneficiary,
        address _custodian
    ) {
        name = _name;
        image = _image;
        description = _description;
        beneficiary = _beneficiary;
        _transferOwnership(_custodian);
    }

    function donate() external payable {
        Donation memory donation = Donation({
            value: msg.value,
            date: block.timestamp
        });

        _donations[msg.sender].push(donation);
        donationsCount++;

        if (!donorExists[msg.sender]) {
            _createDonor(msg.sender);
        }

        uint id = addressToDonor[msg.sender];
        _addItem(id);

        emit DonationReceived(msg.sender, msg.value);
    }

    function changeBeneficiary(address payable _beneficiary) external onlyOwner {
        beneficiary = _beneficiary;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        beneficiary.transfer(balance);
        emit Withdraw(balance);
    }
}