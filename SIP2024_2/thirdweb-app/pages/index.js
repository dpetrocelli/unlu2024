import { useContract, Web3Button, useAddress} from "@thirdweb-dev/react";

const contractAddress =  "0xF6ea696c41236967B7319F54e37Da49e653f49fc";

export default function Home() {
  const { contract } = useContract(contractAddress);
  const address = useAddress(); 
  return (
    <Web3Button
      contractAddress={contractAddress}
      action={async (contract) => {
        // Replace 'mint' with the appropriate method for minting ERC-1155 tokens
        return await contract.methods.mintWithSignature(
          // Pass appropriate parameters for minting ERC-1155 tokens
          contractAddress,
          0, // ID of the token
          1, // Quantity to mint
          {
            name: "My zkEVM NFT",
            description: "I just minted an NFT on the Polygon zkEVM!",
            image: "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?q=80&w=2910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }
        ).send({ from: yourWalletAddress });
      }}
    >
      Mint NFT
    </Web3Button>
  );
  }