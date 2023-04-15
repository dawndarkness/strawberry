// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./Owner.sol";

contract StrawberryColorPaletteFactory is Owner {
    struct Color {
        uint r;
        uint g;
        uint b;
    }

    struct ColorPalette {
        Color[] colors;
    }

    uint colorAmountPerPallet = 5;
    uint paletteAmount = 3;
    uint randNonce = 0;

    ColorPalette[] colorPalettes;

    constructor() {
    }

    function _getRandomPalletIndex() internal returns(uint) {
        return _random(paletteAmount);
    }

    function _getRandomColorIndex() internal returns(uint) {
        return _random(colorAmountPerPallet);
    }

    function _random(uint number) private returns(uint) {
        randNonce++;
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender, randNonce))) % number;
    }
    
    function addPalette() external isOwner {
    }
}