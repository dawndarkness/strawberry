// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./StrawberryColorPaletteFactory.sol";
import "./StrawberryItemFactory.sol";

contract StrawberryDonorFactory is StrawberryColorPaletteFactory, StrawberryItemFactory {
    struct StrawberryDonor {
        uint paletteId;
        uint[] items;
    }

    uint changeColorPaletteFee = 0.001 ether;
    StrawberryDonor[] donors;
    mapping (address => uint) addressToDonor;
    mapping (address => bool) donorExists;

    event DonorCreated(uint donorId);
    event ItemAdded(uint itemId, uint itemColorId);

    function getOwnerByAddress(address _owner) external view returns(uint) {
        return addressToDonor[_owner];
    }

    function changeColorPalette(uint _donorId, uint _paletteId) external payable {
        require(msg.value == changeColorPaletteFee);
        require(_paletteId < palettes.length);
        donors[_donorId].paletteId = _paletteId;
    }

    function _addItem(uint _donorId) internal {
        uint id = _createItem(_getRandomColorIndex(), 0);
        donors[_donorId].items.push(id);
    }

    function _createDonor(address _donorAddress) public {
        uint[] memory items = new uint[](1);
        
        donors.push(StrawberryDonor({
            paletteId: _getRandomPalleteIndex(), 
            items: items
        }));

        uint id = donors.length - 1;

        addressToDonor[_donorAddress] = id;
        emit DonorCreated(id);
    }
}
