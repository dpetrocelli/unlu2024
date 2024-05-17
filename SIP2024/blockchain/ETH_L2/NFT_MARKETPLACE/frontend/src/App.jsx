import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import TennisPlayerToken from "../../server/artifacts/contracts/TennisPlayerToken.sol/TennisPlayerToken.json";
import { setupWeb3 } from "./web3";

const App = () => {
  const [playerId, setPlayerId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [amount, setAmount] = useState(1);
  const [contract, setContract] = useState(null);
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

  useEffect(() => {
    const initialize = async () => {
      try {
        const { provider } = await setupWeb3();
        const signer = provider.getSigner(); // Use signer for transactions
        const contractInstance = new ethers.Contract(contractAddress, TennisPlayerToken.abi, signer);
        setContract(contractInstance);
      } catch (error) {
        console.error("Failed to initialize web3, accounts, or contract. Check console for details.", error);
      }
    };

    initialize();
  }, []);

  const setPlayerInfo = async () => {
    if (contract) {
      try {
        const txResponse = await contract.setPlayerInfo(
          playerId,
          name,
          description,
          imageUrl,
          pricePerToken
        );
        console.log("Transaction hash:", txResponse.hash);
        alert("Player info set successfully. Transaction submitted.");
      } catch (error) {
        console.error("Error setting player info: ", error);
        alert(`Failed to set player info. Error: ${error.message}`);
      }
    }
  };
  

  const mintToken = async () => {
    if (contract) {
      try {
        const tx = await contract.mint(
          playerId,
          amount,
          { value: ethers.utils.parseUnits((pricePerToken * amount).toString(), 'ether') }
        );
        await tx.wait(); // Wait for transaction confirmation (optional)
        alert("Token minted successfully.");
      } catch (error) {
        console.error("Error minting token: ", error);
        alert("Failed to mint token. Check console for details.");
      }
    }
  };

  return (
    <div className="App">
      <h1>Tennis Player Token System</h1>
      <div className="input-field">
        <h2>Set Player Information</h2>
        <input
          type="number"
          placeholder="Player ID"
          value={playerId}
          onChange={(e) => setPlayerId(parseInt(e.target.value))}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price Per Token (ETH)"
          value={pricePerToken}
          onChange={(e) => setPricePerToken(e.target.value)}
        />
        <button onClick={setPlayerInfo}>Set Player Info</button>
      </div>
      <div className="input-field">
        <h2>Mint Player Tokens</h2>
        <input
          type="number"
          placeholder="Player ID"
          value={playerId}
          onChange={(e) => setPlayerId(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button onClick={mintToken}>Mint Token</button>
      </div>
    </div>
  );
};

export default App;
