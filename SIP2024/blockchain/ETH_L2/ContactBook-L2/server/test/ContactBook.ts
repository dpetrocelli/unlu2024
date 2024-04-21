import { expect } from "chai";
import { ethers } from "hardhat";

describe("ContactBook", function () {
    let ContactBook: any;
    let contactBook: any;
    let owner: any;
    let addr1: any;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();

        ContactBook = await ethers.getContractFactory("ContactBook");
        contactBook = await ContactBook.deploy();
    });

    it("Should add a contact", async function () {
        const contactName: string = "Mrinmoy Porel";
        const contactWallet: string = addr1.address;

        await contactBook.connect(owner).addContact(contactName, contactWallet);

        const contacts: any[] = await contactBook.getContacts();

        expect(contacts.length).to.equal(1);
        expect(contacts[0].name).to.equal(contactName);
        expect(contacts[0].wallet).to.equal(contactWallet);
    });

    it("Should remove a contact", async function () {
        const contactName: string = "Mrinmoy Porel";
        const contactWallet: string = addr1.address;

        await contactBook.connect(owner).addContact(contactName, contactWallet);

        const initialContacts: any[] = await contactBook.getContacts();

        await contactBook.connect(owner).removeContact(0);

        const updatedContacts: any[] = await contactBook.getContacts();

        expect(updatedContacts.length).to.equal(initialContacts.length - 1);
    });
});
