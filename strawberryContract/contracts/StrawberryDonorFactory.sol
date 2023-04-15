// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./StrawberryColorPaletteFactory.sol";
import "./StrawberryItemFactory.sol";

error InvalidData(
    uint256 correctIndex
);

contract StrawberryDonorFactory is 
    StrawberryColorPaletteFactory, 
    StrawberryItemFactory 
{
    struct StrawberryDonor {
        uint256 paletteId;
        uint256[] items;
    }

    uint256 changeColorPaletteFee = 0.001 ether;
    StrawberryDonor[] donors;

    mapping (address => uint256) addressToDonor;
    mapping (address => bool) donorExists;

    event DonorCreated(uint256 donorId);
    event ItemAdded(uint256 itemId, uint256 itemColorId);

    function getOwnerByAddress(address _owner) external view returns(uint256) {
        return addressToDonor[_owner];
    }

    function changeColorPalette(
        uint256 _donorId, 
        uint256 _paletteId
    ) 
        external 
        payable 
    {
        require(
            msg.value == changeColorPaletteFee,
            "StrawberryDonorFactory: WHY_SO_CHEAP?"
        );
        
        if (_paletteId >= palettes.length) {
            revert InvalidData(
                palettes.length - 1
            );
        }

        donors[_donorId].paletteId = _paletteId;
    }

    function _addItem(
        uint256 _donorId
    ) 
        internal 
    {
        uint256 id = _createItem(
            _getRandomColorIndex(),
            0 // tier
        );

        donors[_donorId].items.push(id);
    }

    function _createDonor(
        address _donorAddress
    ) 
        public 
    {
        uint256[] memory items = new uint256[](1);
        
        donors.push(StrawberryDonor({
            paletteId: _getRandomPalleteIndex(), 
            items: items
        }));

        uint256 id = donors.length - 1;

        addressToDonor[_donorAddress] = id;
        emit DonorCreated(id);
    }
}
