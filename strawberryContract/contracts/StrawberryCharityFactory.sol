// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./StrawberryCharity.sol";

contract StrawberryCharityFactory {

    StrawberryCharity[] public _charities;
    
    event CharityCreated(
        StrawberryCharity indexed charity, 
        address indexed owner
    );

    function createCharity(
        string memory _name,
        string memory _image,
        string memory _description,
        address payable _beneficiary
    ) 
        public 
    {
        StrawberryCharity charity = new StrawberryCharity({
            _name: _name,
            _image: _image,
            _description: _description,
            _beneficiary: _beneficiary,
            _custodian: msg.sender
        });

        _charities.push(charity);
        emit CharityCreated(charity, msg.sender);
    }

    function charityCount() external view returns(uint) {
        return _charities.length;
    }
}