// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import dotenv from "dotenv";
// import "@nomicfoundation/hardhat-ethers";


// // Config
// // ========================================================
// dotenv.config();

// // Hardhat Config
// // ========================================================
// const config: HardhatUserConfig = {
//   solidity: {
//     version: "0.8.24",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       }
//     }
//   },
//   defaultNetwork: "localhost",
//   networks: {
//     hardhat: {
//     },
//     localhost: {
//       url: 'http://127.0.0.1:8545'
//     },
//     mumbai: {
//       url: `${process.env.RPC_MUMBAI_URL || ''}`,
//       accounts: process.env.WALLET_PRIVATE_KEY
//         ? [`0x${process.env.WALLET_PRIVATE_KEY}`]
//         : [],
//     },
//     zkevmTestnet: {
//       url: `${process.env.RPC_ZKEVM_URL || ''}`,
//       accounts: process.env.WALLET_PRIVATE_KEY
//         ? [`0x${process.env.WALLET_PRIVATE_KEY}`]
//         : [],
//     }
//   }
// };

// export default config;
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define your private key and RPC URLs securely through environment variables
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";
const RPC_MUMBAI_URL = process.env.RPC_MUMBAI_URL || "";
const RPC_AMOY_URL = process.env.RPC_AMOY_URL || "";
const RPC_ZKEVM_URL = process.env.RPC_ZKEVM_URL || "";
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || "";


// Hardhat Configuration
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // Adjust for your contract's needs
      },
    },
  },
  etherscan: {
    apiKey: {
      cardona: POLYGON_API_KEY,
      polygonMumbai: POLYGON_API_KEY
    }
  },
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      // Configuration specific to Hardhat Network
    },
    localhost: {
      // Useful for connecting to a local Ethereum node
      url: 'http://127.0.0.1:8545',
    },
    mumbai: {
      // Polygon Mumbai Testnet
      url: `${RPC_MUMBAI_URL}`,
      accounts: WALLET_PRIVATE_KEY ? [`0x${WALLET_PRIVATE_KEY}`] : [],
    },
    amoyPoS: {
      // Polygon Mumbai Testnet
      url: `${RPC_AMOY_URL}`,
      accounts: WALLET_PRIVATE_KEY ? [`0x${WALLET_PRIVATE_KEY}`] : [],
    },
    polygonZkEVMCardona: {
      // Example zkEVM Testnet
      url: `${RPC_ZKEVM_URL}`,
      accounts: WALLET_PRIVATE_KEY ? [`0x${WALLET_PRIVATE_KEY}`] : [],
    },
    // You can add more networks as needed
  },
};

export default config;
