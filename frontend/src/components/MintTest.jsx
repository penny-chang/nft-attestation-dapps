import React, { useEffect } from "react";
import { Button } from "@mui/material";
import {
  createWeb3Service,
  accountInfo,
  web3,
  nftContract,
  contractAddress,
} from "../utils/web3Util";
import { randomTokenId } from "../utils/tokenUtil";
import { stringToByteArray } from "../utils/stringUtil";

const MintTest = () => {
  const buildTxParams = async (nftInfo) => {
    // Gas price setting
    const gasLimit = 70000; // You may change the gasLimit here
    const gasPriceMultiplier = 2; // If you find your transaction not able to be processed on chain, higher this value
    const maxPriorityFeePerGasInWei = 2500000000;
    // Returns the current gas price oracle. The gas price is determined by the last few blocks median gas price.
    const baseGasPrice = await web3.eth.getGasPrice();
    console.log("getTxParams() current gas price oracle:", baseGasPrice);
    const txParams = {
      from: nftInfo.account,
      to: contractAddress,
      gas: web3.utils.numberToHex(gasLimit),
      gasPrice: BigInt(baseGasPrice) * BigInt(gasPriceMultiplier),
      //   maxPriorityFeePerGas: web3.utils.numberToHex(maxPriorityFeePerGasInWei),
      data: nftContract.methods
        .mint(
          nftInfo.account,
          nftInfo.id,
          Number(nftInfo.quantity),
          nftInfo.data
        )
        .encodeABI(),
    };
    console.log("buildTxParams()", { txParams });
    return txParams;
  };

  useEffect(() => {
    createWeb3Service();
  }, []);
  const mintNFT = async () => {
    const nftInfo = {
      account: accountInfo?.address,
      id: randomTokenId(),
      quantity: 5,
      data: [], // Additional data here, use `stringToByteArray(dataStr)`
    };
    const txParams = await buildTxParams(nftInfo);
    web3.eth
      .sendTransaction(txParams)
      .on("transactionHash", function (data) {
        // This will trigger when user click confirm button
        console.log("mint transactionHash:", data);
      })
      .on("error", function (error) {
        console.log("send mint transaction error: ", { error });
      })
      .then(function (receipt) {
        console.log("receipt: ", receipt);
      });
  };

  return <Button onClick={mintNFT}>Test mint</Button>;
};

export default MintTest;
