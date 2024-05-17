import { ethers } from "ethers";

async function getWeb3() {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      console.log("Metamask connected");

      const { chainId } = await provider.getNetwork();
      console.log("Connected to chain " + chainId);

      if (chainId !== 80002 && chainId !== 2442) {  // Polygon Testnet and your specific chain
        console.error("Connected to the wrong network");
        return null;
      }

      console.log("Web3 provider set up successfully.");
      return provider;
    } catch (error) {
      console.error("Error setting up Web3 provider:", error);
      return null;
    }
  } else {
    alert("MetaMask not detected! Please install MetaMask.");
    return null;
  }
}

export async function setupWeb3() {
  try {
    const provider = await getWeb3();
    if (!provider) {
      console.error("Failed to setup Web3: Provider is null");
      return null;
    }

    const signer = provider.getSigner();
    return { provider, signer };
  } catch (error) {
    console.error("Failed to setup Web3:", error);
    return null;
  }
}
