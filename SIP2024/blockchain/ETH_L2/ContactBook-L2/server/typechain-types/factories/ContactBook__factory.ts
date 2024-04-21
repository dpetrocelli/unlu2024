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
import type { NonPayableOverrides } from "../common";
import type { ContactBook, ContactBookInterface } from "../ContactBook";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "addContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContacts",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct ContactBook.Contact[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "removeContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556108c8806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063603d57a114610046578063708adcd51461005b578063db920b771461006e575b600080fd5b6100596100543660046103ff565b61008c565b005b61005961006936600461044a565b6101ec565b6100766102a5565b604051610083919061050c565b60405180910390f35b6000546001600160a01b031633146100bf5760405162461bcd60e51b81526004016100b6906105bc565b60405180910390fd5b60015481106101075760405162461bcd60e51b815260206004820152601460248201527324b73232bc1037baba1037b3103137bab732399760611b60448201526064016100b6565b805b600180546101179190610614565b8110156101a357600161012a828261062d565b8154811061013a5761013a610640565b90600052602060002090600202016001828154811061015b5761015b610640565b600091825260209091206002909102018061017683826106e1565b5060019182015490820180546001600160a01b0319166001600160a01b0390921691909117905501610109565b5060018054806101b5576101b56107c2565b600082815260208120600019909201916002830201906101d582826103a9565b5060010180546001600160a01b0319169055905550565b6000546001600160a01b031633146102165760405162461bcd60e51b81526004016100b6906105bc565b604080518082019091528281526001600160a01b0382166020820152600180548082018255600091909152815160029091027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190819061027790826107d8565b5060209190910151600190910180546001600160a01b0319166001600160a01b039092169190911790555050565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156103a057838290600052602060002090600202016040518060400160405290816000820180546102fc90610656565b80601f016020809104026020016040519081016040528092919081815260200182805461032890610656565b80156103755780601f1061034a57610100808354040283529160200191610375565b820191906000526020600020905b81548152906001019060200180831161035857829003601f168201915b50505091835250506001918201546001600160a01b03166020918201529183529290920191016102c9565b50505050905090565b5080546103b590610656565b6000825580601f106103c5575050565b601f0160209004906000526020600020908101906103e391906103e6565b50565b5b808211156103fb57600081556001016103e7565b5090565b60006020828403121561041157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b038116811461044557600080fd5b919050565b6000806040838503121561045d57600080fd5b823567ffffffffffffffff8082111561047557600080fd5b818501915085601f83011261048957600080fd5b81358181111561049b5761049b610418565b604051601f8201601f19908116603f011681019083821181831017156104c3576104c3610418565b816040528281528860208487010111156104dc57600080fd5b8260208601602083013760006020848301015280965050505050506105036020840161042e565b90509250929050565b600060208083018184528085518083526040925060408601915060408160051b8701018488016000805b848110156105ad57603f198a8503018652825180518886528051808a880152845b81811015610573578281018c0151888201606001528b01610557565b508681016060908101869052928b01516001600160a01b03168b880152978a0197601f01601f191690950101935091870191600101610536565b50919998505050505050505050565b60208082526022908201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f604082015261371760f11b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b81810381811115610627576106276105fe565b92915050565b80820180821115610627576106276105fe565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061066a57607f821691505b60208210810361068a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156106dc576000816000526020600020601f850160051c810160208610156106b95750805b601f850160051c820191505b818110156106d8578281556001016106c5565b5050505b505050565b8181036106ec575050565b6106f68254610656565b67ffffffffffffffff81111561070e5761070e610418565b6107228161071c8454610656565b84610690565b6000601f821160018114610756576000831561073e5750848201545b600019600385901b1c1916600184901b1784556107bb565b600085815260209020601f19841690600086815260209020845b838110156107905782860154825560019586019590910190602001610770565b50858310156107ae5781850154600019600388901b60f8161c191681555b50505060018360011b0184555b5050505050565b634e487b7160e01b600052603160045260246000fd5b815167ffffffffffffffff8111156107f2576107f2610418565b6108008161071c8454610656565b602080601f831160018114610835576000841561081d5750858301515b600019600386901b1c1916600185901b1785556106d8565b600085815260208120601f198616915b8281101561086457888601518255948401946001909101908401610845565b50858210156108825787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122099f8b59b10b4e1be0d6cf1aef78bfd67003b280a3c123646789d2785a2a7182964736f6c63430008180033";

type ContactBookConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContactBookConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContactBook__factory extends ContractFactory {
  constructor(...args: ContactBookConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ContactBook & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ContactBook__factory {
    return super.connect(runner) as ContactBook__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContactBookInterface {
    return new Interface(_abi) as ContactBookInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ContactBook {
    return new Contract(address, _abi, runner) as unknown as ContactBook;
  }
}
