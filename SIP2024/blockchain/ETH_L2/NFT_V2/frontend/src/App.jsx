import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import TennisPlayerToken from "../../server/artifacts/contracts/TennisPlayerToken.sol/TennisPlayerToken.json";
import Marketplace from "../../server/artifacts/contracts/Marketplace.sol/Marketplace.json";
import { setupWeb3 } from "./web3";

const App = () => {
  const [playerId, setPlayerId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [amount, setAmount] = useState(1);
  const [nftContract, setNftContract] = useState(null);
  const [marketplaceContract, setMarketplaceContract] = useState(null);
  const nftContractAddress = import.meta.env.VITE_NFT_CONTRACT_ADDRESS;
  const marketplaceContractAddress = import.meta.env.VITE_MARKETPLACE_CONTRACT_ADDRESS;

  useEffect(() => {
    const initialize = async () => {
      const { provider, signer } = await setupWeb3();
      if (!provider || !signer) {
        console.error("Web3 setup failed.");
        return;
      }

      const nftInstance = new ethers.Contract(nftContractAddress, TennisPlayerToken.abi, signer);
      const marketplaceInstance = new ethers.Contract(marketplaceContractAddress, Marketplace.abi, signer);
      setNftContract(nftInstance);
      setMarketplaceContract(marketplaceInstance);
    };

    initialize();
  }, []);

  const listNFTForSale = async () => {
    if (!marketplaceContract || !nftContract) {
      console.error("Contract not loaded");
      return;
    }
    try {
      const price = ethers.utils.parseUnits(pricePerToken, 'ether');
      const transaction = await marketplaceContract.createList(
        nftContractAddress,
        playerId,
        amount,
        3600, // For example, listing lasts for 1 hour
        price
      );
      await transaction.wait();
      alert("NFT listed for sale successfully.");
    } catch (error) {
      console.error("Error listing NFT:", error);
      alert("Failed to list NFT for sale. Check console for details.");
    }
  };

  return (
    <div className="App">
      <h1>Tennis Player Token System</h1>
      {/* Existing fields and mint button */}
      <button onClick={listNFTForSale}>List NFT For Sale</button>
      {/* Add more functionality as needed, such as buy, bid, etc. */}
    </div>
  );
};

export default App;
