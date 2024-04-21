


import hre from "hardhat";

// Colour codes for terminal prints
const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
    let networkName = hre.network.name; 

    // Now you can use the networkName variable as needed in your script
    console.log("Deploying to network:", networkName);
    networkName = networkName.toLowerCase();

  const contract = await hre.ethers.deployContract("ContactBook");

  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();

  console.log("Greeter deployed to: " + `${GREEN}${contractAddress}${RESET}\n`);

  console.log(
    "Waiting 10 seconds before beginning the contract verification to allow the block explorer to index the contract...\n",
  );


  if (!networkName.includes('zkevm')) {
    await delay(10000); // Wait for 30 seconds before verifying the contract

    await hre.run("verify:verify", {
        address: contractAddress,
    
      });
    }
    console.log(`Contract ${contractAddress} has been deployed on ${networkName}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});