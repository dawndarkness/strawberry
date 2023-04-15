// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./Ownable.sol";

contract StrawberryColorPaletteFactory is Ownable {
    uint256 public colorAmountPerPalette = 5;
    uint256 private randNonce = 0;

    uint256[] public palettes;

    mapping (uint256 => string[]) paletteToColors;
    
    event PaletteCreated(
        uint256 paletteId
    );

    constructor() {
        addPalette(["0x845EC2", "0x4B4453", "0xB0A8B9", "0xC34A36", "0xFF8066"]);
        addPalette(["0x699674", "0x3B4A3F", "0x9EAFA2", "0x4E94B3", "0x03617E"]);
        addPalette(["0x27B6D8", "0x334A52", "0x96AFB8", "0xC498D4", "0x8E649D"]);
        addPalette(["0x5AA55B", "0x24956D", "0x008377", "0x006F77", "0x1C5B6C"]);
    }

    //Public
    function addPalette(string[5] memory _colors) public onlyOwner {
        palettes.push(palettes.length);
        paletteToColors[palettes.length - 1] = _colors;
        emit PaletteCreated(palettes.length - 1);
    }

    //Internal
    function _getRandomPalleteIndex() internal returns(uint256) {
        return _random(palettes.length - 1);
    }

    function _getRandomColorIndex() internal returns(uint256) {
        return _random(colorAmountPerPalette - 1);
    }

    //Private
    function _random(uint256 number) private returns(uint256) {
        randNonce++;
        return uint256(keccak256(abi.encodePacked(
            block.timestamp, 
            block.prevrandao, 
            msg.sender, 
            randNonce
        ))) % number;
    }
}
