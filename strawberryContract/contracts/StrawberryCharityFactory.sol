// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./StrawberryCharity.sol";

contract StrawberryCharityFactory {
    StrawberryCharity[] public _charities;
    event CharityCreated(StrawberryCharity indexed charity, address indexed owner);

    function createCharity(
        string memory name,
        string memory image,
        string memory description,
        address payable beneficiary
    ) public {
        StrawberryCharity charity = new StrawberryCharity({
            _name: name,
            _image: image,
            _description: description,
            _beneficiary: beneficiary,
            _custodian: msg.sender
        });

        _charities.push(charity);
        emit CharityCreated(charity, msg.sender);
    }

    function charityCount() external view returns(uint) {
        return _charities.length;
    }
}