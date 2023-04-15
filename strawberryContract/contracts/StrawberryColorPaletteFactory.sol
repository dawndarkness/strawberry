// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./Ownable.sol";

contract StrawberryColorPaletteFactory is Ownable {
    uint public colorAmountPerPalette = 5;
    uint private randNonce = 0;

    uint[] public palettes;

    mapping (uint => string[]) paletteToColors;
    
    event PaletteCreated(uint paletteId);

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
    function _getRandomPalleteIndex() internal returns(uint) {
        return _random(palettes.length - 1);
    }

    function _getRandomColorIndex() internal returns(uint) {
        return _random(colorAmountPerPalette - 1);
    }

    //Private
    function _random(uint number) private returns(uint) {
        randNonce++;
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender, randNonce))) % number;
    }
}
