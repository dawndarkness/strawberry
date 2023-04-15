// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./StrawberryColorPaletteFactory.sol";
import "./StrawberryItemFactory.sol";

contract StrawberryDonorFactory is StrawberryColorPaletteFactory, StrawberryItemFactory {
    struct StrawberryDonor {
        string name;
        uint paletteId;
        uint[] items;
    }

    uint changeColorPaletteFee = 0.001 ether;
    StrawberryDonor[] donors;
    mapping (address => uint) addressToDonor;

    event DonorCreated(uint donorId, string donorName);
    event ItemAdded(uint itemId, uint itemColorId);

    function getOwnerByAddress(address _owner) external view returns(uint) {
        return addressToDonor[_owner];
    }

    function changeColorPalette(uint _donorId, uint _paletteId) external payable {
        require(msg.value == changeColorPaletteFee);
        require(_paletteId < palettes.length);
        donors[_donorId].paletteId = _paletteId;
    }

    function _addItem(uint _donorId) external {
        uint id = _createItem(_getRandomColorIndex(), 0);
        donors[_donorId].items.push(id);
    }

    function _createDonor(string memory _name) internal {
        uint[] memory items = new uint[](1);
        
        donors.push(StrawberryDonor({
            name: _name, 
            paletteId: _getRandomPalleteIndex(), 
            items: items
        }));

        uint id = donors.length - 1;

        addressToDonor[msg.sender] = id;
        emit DonorCreated(id, _name);
    }
}
