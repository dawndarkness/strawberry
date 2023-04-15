// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract StrawberryItemFactory {
    struct StrawberryItem {
        address owner;
        uint colorId;
        uint tierId;
    }

    StrawberryItem[] items;

    function _createItem(uint _colorId, uint _tierId) internal returns(uint) {
        items.push(StrawberryItem(msg.sender, _colorId, _tierId));
        uint id = items.length - 1;
        return id;
    }
}
