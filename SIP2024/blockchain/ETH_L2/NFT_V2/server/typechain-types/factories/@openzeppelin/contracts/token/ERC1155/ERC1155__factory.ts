/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  ERC1155,
  ERC1155Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC1155/ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016033803806200160383398101604081905262000034916200006e565b6200003f8162000046565b50620002a0565b6002620000548282620001d4565b5050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200008257600080fd5b82516001600160401b03808211156200009a57600080fd5b818501915085601f830112620000af57600080fd5b815181811115620000c457620000c462000058565b604051601f8201601f19908116603f01168101908382118183101715620000ef57620000ef62000058565b8160405282815288868487010111156200010857600080fd5b600093505b828410156200012c57848401860151818501870152928501926200010d565b600086848301015280965050505050505092915050565b600181811c908216806200015857607f821691505b6020821081036200017957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001cf576000816000526020600020601f850160051c81016020861015620001aa5750805b601f850160051c820191505b81811015620001cb57828155600101620001b6565b5050505b505050565b81516001600160401b03811115620001f057620001f062000058565b620002088162000201845462000143565b846200017f565b602080601f831160018114620002405760008415620002275750858301515b600019600386901b1c1916600185901b178555620001cb565b600085815260208120601f198616915b82811015620002715788860151825594840194600190910190840162000250565b5085821015620002905787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61135380620002b06000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610b31565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610b74565b610225565b60405190151581526020016100a9565b6100e86100e3366004610b98565b610275565b6040516100a99190610bf7565b610108610103366004610d5b565b610309565b005b61011d610118366004610e05565b610355565b6040516100a99190610f0c565b610108610138366004610f1f565b610477565b6100c561014b366004610f5b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610187366004610f8e565b610486565b60006001600160a01b0383166101fc5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60006001600160e01b03198216636cdb3d1360e11b148061025657506001600160e01b031982166303a24d0760e21b145b8061021f57506301ffc9a760e01b6001600160e01b031983161461021f565b60606002805461028490610ff3565b80601f01602080910402602001604051908101604052809291908181526020018280546102b090610ff3565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103255750610325853361014b565b6103415760405162461bcd60e51b81526004016101f39061102d565b61034e85858585856104cb565b5050505050565b606081518351146103ba5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f3565b6000835167ffffffffffffffff8111156103d6576103d6610c0a565b6040519080825280602002602001820160405280156103ff578160200160208202803683370190505b50905060005b845181101561046f5761044a8582815181106104235761042361107b565b602002602001015185838151811061043d5761043d61107b565b602002602001015161018c565b82828151811061045c5761045c61107b565b6020908102919091010152600101610405565b509392505050565b6104823383836106a1565b5050565b6001600160a01b0385163314806104a257506104a2853361014b565b6104be5760405162461bcd60e51b81526004016101f39061102d565b61034e8585858585610781565b815183511461052d5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f3565b6001600160a01b0384166105535760405162461bcd60e51b81526004016101f390611091565b3360005b84518110156106335760008582815181106105745761057461107b565b6020026020010151905060008583815181106105925761059261107b565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156105e25760405162461bcd60e51b81526004016101f3906110d6565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061061f908490611120565b909155505060019093019250610557915050565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610683929190611141565b60405180910390a46106998187878787876108ab565b505050505050565b816001600160a01b0316836001600160a01b0316036107145760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f3565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166107a75760405162461bcd60e51b81526004016101f390611091565b3360006107b385610a0f565b905060006107c085610a0f565b90506000868152602081815260408083206001600160a01b038c168452909152902054858110156108035760405162461bcd60e51b81526004016101f3906110d6565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610840908490611120565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46108a0848a8a8a8a8a610a5a565b505050505050505050565b6001600160a01b0384163b156106995760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906108ef908990899088908890889060040161116f565b6020604051808303816000875af192505050801561092a575060408051601f3d908101601f19168201909252610927918101906111cd565b60015b6109d6576109366111ea565b806308c379a00361096f575061094a611206565b806109555750610971565b8060405162461bcd60e51b81526004016101f39190610bf7565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f3565b6001600160e01b0319811663bc197c8160e01b14610a065760405162461bcd60e51b81526004016101f390611290565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610a4957610a4961107b565b602090810291909101015292915050565b6001600160a01b0384163b156106995760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610a9e90899089908890889088906004016112d8565b6020604051808303816000875af1925050508015610ad9575060408051601f3d908101601f19168201909252610ad6918101906111cd565b60015b610ae5576109366111ea565b6001600160e01b0319811663f23a6e6160e01b14610a065760405162461bcd60e51b81526004016101f390611290565b80356001600160a01b0381168114610b2c57600080fd5b919050565b60008060408385031215610b4457600080fd5b610b4d83610b15565b946020939093013593505050565b6001600160e01b031981168114610b7157600080fd5b50565b600060208284031215610b8657600080fd5b8135610b9181610b5b565b9392505050565b600060208284031215610baa57600080fd5b5035919050565b6000815180845260005b81811015610bd757602081850181015186830182015201610bbb565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610b916020830184610bb1565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610c4657610c46610c0a565b6040525050565b600067ffffffffffffffff821115610c6757610c67610c0a565b5060051b60200190565b600082601f830112610c8257600080fd5b81356020610c8f82610c4d565b604051610c9c8282610c20565b80915083815260208101915060208460051b870101935086841115610cc057600080fd5b602086015b84811015610cdc5780358352918301918301610cc5565b509695505050505050565b600082601f830112610cf857600080fd5b813567ffffffffffffffff811115610d1257610d12610c0a565b604051610d29601f8301601f191660200182610c20565b818152846020838601011115610d3e57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610d7357600080fd5b610d7c86610b15565b9450610d8a60208701610b15565b9350604086013567ffffffffffffffff80821115610da757600080fd5b610db389838a01610c71565b94506060880135915080821115610dc957600080fd5b610dd589838a01610c71565b93506080880135915080821115610deb57600080fd5b50610df888828901610ce7565b9150509295509295909350565b60008060408385031215610e1857600080fd5b823567ffffffffffffffff80821115610e3057600080fd5b818501915085601f830112610e4457600080fd5b81356020610e5182610c4d565b604051610e5e8282610c20565b83815260059390931b8501820192828101915089841115610e7e57600080fd5b948201945b83861015610ea357610e9486610b15565b82529482019490820190610e83565b96505086013592505080821115610eb957600080fd5b50610ec685828601610c71565b9150509250929050565b60008151808452602080850194506020840160005b83811015610f0157815187529582019590820190600101610ee5565b509495945050505050565b602081526000610b916020830184610ed0565b60008060408385031215610f3257600080fd5b610f3b83610b15565b915060208301358015158114610f5057600080fd5b809150509250929050565b60008060408385031215610f6e57600080fd5b610f7783610b15565b9150610f8560208401610b15565b90509250929050565b600080600080600060a08688031215610fa657600080fd5b610faf86610b15565b9450610fbd60208701610b15565b93506040860135925060608601359150608086013567ffffffffffffffff811115610fe757600080fd5b610df888828901610ce7565b600181811c9082168061100757607f821691505b60208210810361102757634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b8082018082111561021f57634e487b7160e01b600052601160045260246000fd5b6040815260006111546040830185610ed0565b82810360208401526111668185610ed0565b95945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061119b90830186610ed0565b82810360608401526111ad8186610ed0565b905082810360808401526111c18185610bb1565b98975050505050505050565b6000602082840312156111df57600080fd5b8151610b9181610b5b565b600060033d11156112035760046000803e5060005160e01c5b90565b600060443d10156112145790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561124457505050505090565b828501915081518181111561125c5750505050505090565b843d87010160208285010111156112765750505050505090565b61128560208286010187610c20565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061131290830184610bb1565b97965050505050505056fea2646970667358221220388dd22b83870c94851e790dd5a68700cae0bb5a79c964b67b10f420ed27af4d64736f6c63430008180033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    uri_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override deploy(
    uri_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(uri_, overrides || {}) as Promise<
      ERC1155 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC1155__factory {
    return super.connect(runner) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new Interface(_abi) as ERC1155Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC1155 {
    return new Contract(address, _abi, runner) as unknown as ERC1155;
  }
}
