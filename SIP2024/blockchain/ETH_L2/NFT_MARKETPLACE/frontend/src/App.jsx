import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { GiCancel } from "react-icons/gi";
import "./App.css";
import { setupWeb3 } from "./web3"; // Changed from getWeb3 to setupWeb3 for clarity
import ContactBook from "../../server/artifacts/contracts/ContactBook.sol/ContactBook.json";


const App = () => {
  const [name, setName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contract, setContract] = useState(null);
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  

  useEffect(() => {
    const initialize = async () => {
      const { provider } = await setupWeb3(); // Destructure provider and signer from the returned object
      
      const signer  =  await provider.getSigner()
      
      if (provider && signer) {
        
        const contractInstance = new ethers.Contract(contractAddress, ContactBook.abi, signer);
        setContract(contractInstance);
        refreshContacts(contractInstance); // Ensure this function is implemented
        
      }else{
        console.error ("Master Wallet address is not working")
      }
      
          }
          initialize();
        }, []);
      
        // Function to add a new contact to the contract.
        const addContact = async () => {
          if (web3 && contract) {
            try {
              const tx = await contract.addContact(name, walletAddress);
              await tx.wait();
              window.alert("Contact added successfully.");
      
              // Refresh the list of contacts after adding.
              refreshContacts(contract);
      
              // Clear the name and walletAddress input fields.
              setName("");
              setWalletAddress("");
            } catch (error) {
              console.error("Error adding contact: ", error);
            }
          }
        };
      
        // Function to remove a contact from the contract.
        const removeContact = async (index) => {
          if (web3 && contract) {
            try {
              const tx = await contract.removeContact(index);
              await tx.wait();
              window.alert("Contact removed successfully.");
      
              // Refresh the list of contacts after removal.
              refreshContacts(contract);
            } catch (error) {
              console.error("Error removing contact: ", error);
            }
          }
        };
      
        // Function to retrieve and display the list of contacts from the contract.
        const refreshContacts = async (contract) => {
          
          if (contract) {
            
            const allContacts = await contract.getContacts();
            console.log ("the contacts are")
            console.log (allContacts)
            setContacts(allContacts);
          }
          else {
            console.error (" No contacts found ")
          }
        };
      
        return (
          <div className="App">
            <h1>Contact Book</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Wallet Address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button onClick={addContact}>Add Contact</button>
            </div>
            <h2>Contacts</h2>
            <div className="contacts">
              <ul>
                {contacts.map((contact, index) => (
                  <li key={index}>
                    <div className="contact-details">
                      <span className="name">{contact.name}</span>
                      <span className="wallet">Wallet Address:</span>
                      <span className="address">{contact.wallet}</span>
                    </div>
                    <button onClick={() => removeContact(index)}><GiCancel /></button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      };
      
      export default App;
      