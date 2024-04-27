// Import the ethers.js library to work with Ethereum

import { ethers } from "ethers";

// // Define an asynchronous function to set up the Web3 provider
async function getWeb3() {
  if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
    try {
      const provider =  new ethers.BrowserProvider(window.ethereum)
      console.log("provider", provider)
      await provider.send("eth_requestAccounts", []);
      const signer  =  await provider.getSigner()
      // const contract =  new ethers.Contract(contractAdd,Abi.abi,signer) 
      //Uncomment above if you are using contract or making a dapp
      console.log(signer.address)
      console.log("Metamask connected");
      //setWalletConnected(true)
      
      const { chainId } = await provider.getNetwork();
      console.log (chainId)
      let wrongNetwork = true;

      if (!chainId.toString().includes("80002") && (!chainId.toString().includes("2442")) && (!chainId.toString().includes("1101")))
     {
          console.log("Error setting the Network");
          return null;
      }
    
      console.log("Web3 provider set up successfully.");
      return provider;
      } catch (error) {
        console.error("Error setting up Web3 provider:", error);
        return null;
      }
  }
  else{
    alert("MetaMask not detected! Please install MetaMask.");
    return null;
  }

}

// // Export a function to retrieve the Web3 provider
export async function setupWeb3() {
  try {
    const provider = await getWeb3();
    // Additional setup or validation can go here
    return provider;
  } catch (error) {
    console.error("Failed to setup Web3:", error);
    // Depending on your application, you might want to return null or handle the error differently
    return null;
  }
}
