/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "TennisPlayerToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TennisPlayerToken__factory>;

    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "TennisPlayerToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TennisPlayerToken>;

    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155MetadataURI>;
    deployContract(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "TennisPlayerToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TennisPlayerToken>;

    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155MetadataURI",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155MetadataURI>;
    deployContract(
      name: "IERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC1155Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "TennisPlayerToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TennisPlayerToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
