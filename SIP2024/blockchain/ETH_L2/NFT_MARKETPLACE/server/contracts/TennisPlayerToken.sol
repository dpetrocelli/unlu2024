// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract TennisPlayerToken is ERC1155, Ownable {
    using SafeMath for uint256;

    struct PlayerInfo {
        string name;
        string description;
        string imageUrl;
        uint256 pricePerToken;
    }

    struct ListedToken {
        uint256 tokenId;
        address owner;
        uint256 price;
        bool isListed;
    }

    mapping(uint256 => PlayerInfo) public playerInfos;
    mapping(uint256 => uint256) public tokenSupply;
    mapping(uint256 => ListedToken) public listedTokens;

    address payable public feeRecipient;
    uint256 public constant FEE_PERCENTAGE = 2; // 2% de comisión

    event PlayerInfoUpdated(
        uint256 indexed playerId,
        string name,
        string description,
        string imageUrl,
        uint256 pricePerToken
    );
    event TokenListed(
        uint256 indexed tokenId,
        address indexed owner,
        uint256 price
    );
    event TokenDelisted(uint256 indexed tokenId);
    event TokenSold(
        uint256 indexed tokenId,
        address indexed from,
        address indexed to,
        uint256 price
    );

    constructor(address payable _feeRecipient) ERC1155("") {
        feeRecipient = _feeRecipient;
    }

    function setPlayerInfo(
        uint256 playerId,
        string memory name,
        string memory description,
        string memory imageUrl,
        uint256 pricePerToken
    ) public onlyOwner {
        playerInfos[playerId] = PlayerInfo(
            name,
            description,
            imageUrl,
            pricePerToken
        );
        emit PlayerInfoUpdated(
            playerId,
            name,
            description,
            imageUrl,
            pricePerToken
        );
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        require(
            bytes(playerInfos[tokenId].name).length != 0,
            "Token does not exist"
        );
        string memory json = Base64.encode(
            bytes(
                abi.encodePacked(
                    '{"name": "',
                    playerInfos[tokenId].name,
                    '", "description": "',
                    playerInfos[tokenId].description,
                    '", "image": "',
                    playerInfos[tokenId].imageUrl,
                    '"}'
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function mint(uint256 playerId, uint256 amount) public payable {
        require(amount > 0 && amount <= 20, "Invalid amount");
        uint256 totalCost = playerInfos[playerId].pricePerToken.mul(amount);
        require(msg.value >= totalCost, "Not enough ETH sent");

        uint256 fee = totalCost.mul(FEE_PERCENTAGE).div(100);
        uint256 paymentToOwner = totalCost.sub(fee);

        _mint(msg.sender, playerId, amount, "");
        tokenSupply[playerId] += amount;

        payable(feeRecipient).transfer(fee);
        payable(owner()).transfer(paymentToOwner);
    }

    function listToken(uint256 tokenId, uint256 price) public {
        require(
            balanceOf(msg.sender, tokenId) > 0,
            "Caller must own the token"
        );
        require(price > 0, "Price must be greater than zero");

        listedTokens[tokenId] = ListedToken(tokenId, msg.sender, price, true);
        emit TokenListed(tokenId, msg.sender, price);
    }

    function delistToken(uint256 tokenId) public {
        require(
            listedTokens[tokenId].owner == msg.sender,
            "Caller is not the owner"
        );
        listedTokens[tokenId].isListed = false;
        emit TokenDelisted(tokenId);
    }

    function buyToken(uint256 tokenId) public payable {
        ListedToken storage listing = listedTokens[tokenId];
        require(listing.isListed, "Token not listed for sale");
        require(
            msg.value >= listing.price,
            "Sent value is less than the price"
        );
        require(listing.owner != msg.sender, "Caller is already the owner");

        uint256 fee = listing.price.mul(FEE_PERCENTAGE).div(100);
        uint256 paymentToOwner = listing.price.sub(fee);

        _safeTransferFrom(listing.owner, msg.sender, tokenId, 1, "");
        payable(feeRecipient).transfer(fee);
        payable(listing.owner).transfer(paymentToOwner);

        listing.isListed = false;
        emit TokenSold(tokenId, listing.owner, msg.sender, listing.price);
    }
}
