// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract ContactBook {
    // Declare a private variable 'owner' to store the contract owner's address.
    address private owner;

    // Define a struct 'Contact' to store contact information with 'name' and 'wallet' fields.
    struct Contact {
        string name;
        address wallet;
    }

    // Declare a private array 'contacts' to store an array of contacts.
    Contact[] private contacts;

    constructor() {
        // The constructor, executed once when the contract is deployed, setting the owner to the deployer's address.
        owner = msg.sender;
    }

    modifier onlyOwner() {
        // Modifier ensures only the contract owner can call certain functions.
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    // This function allows the owner to add a contact to the 'contacts' array.
    function addContact(string memory _name, address _wallet) public onlyOwner {
        contacts.push(Contact(_name, _wallet));
    }

    function removeContact(uint _index) public onlyOwner {
        // To check if the provided index is valid.
        require(_index < contacts.length, "Index out of bounds.");

        for (uint i = _index; i < contacts.length - 1; i++) {
            // This loop shifts the contacts to fill the gap created by removing a contact.
            contacts[i] = contacts[i + 1];
        }

        // This removes the last contact to maintain the correct array length.
        contacts.pop();
    }

    // This function allows anyone to view the list of contacts.
    function getContacts() public view returns (Contact[] memory) {
        return contacts;
    }
}

// Contract deployed on Polygon Mumbai testnet at address: 0x7eA70E947C0E8b8832ABCb86a35b64809183Fd30
