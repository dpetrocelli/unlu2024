// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155SignatureMint.sol";

contract MyContract is ERC1155SignatureMint {
    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        address _primarySaleRecipient
    )
        ERC1155SignatureMint(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps,
            _primarySaleRecipient
        )
    {}

    // Example function to mint ERC1155 tokens
    function mintTokens(
        uint256 _id,
        address _to,
        uint256 _amount,
        bytes calldata _data
    ) external {
        // Correct call to _mint with proper argument order and types
        _mint(_to, _id, _amount, _data);
    }
}
