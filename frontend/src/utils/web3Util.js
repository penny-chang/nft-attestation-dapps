import Web3 from "web3";
import contractAbi from "../contract/contractABI.json";

export const contractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS;

export var accountInfo = { address: "", chainId: 0 };
export var web3;
export var nftContract;

export const connectMetaMaskAccount = () => {
  return new Promise((myResolve, myReject) => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        console.log("connectMetaMaskAccount() accounts=", accounts);
        window.ethereum.request({ method: "eth_chainId" }).then((chainId) => {
          myResolve({ address: accounts[0], chainId: Number(chainId) });
        });
      })
      .catch((error) => {
        if (error.code === 4001) {
          myReject({ code: 4001, message: "User denied to connect account." });
        } else if (error.code === -32002) {
          myReject({
            code: -32002,
            message:
              "Resource unavailable. Something might already been processing.",
          });
        } else {
          myReject({ code: 500, message: "Something went wrong." });
        }
      });
  });
};

export const createWeb3Service = async () => {
  console.log("createWeb3Service() start, using Metamask provider");
  const web3Instance = new Web3(window.ethereum);
  const connectAccount = await connectMetaMaskAccount();
  web3 = web3Instance;
  web3.eth.transactionPollingTimeout = 30000; // 30 seconds
  accountInfo = { ...connectAccount };
  nftContract = new web3.eth.Contract(contractAbi, contractAddress);
  console.log("createWeb3Service() end", { accountInfo, nftContract });
};

export const buildTxParams = async (nftInfo) => {
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
      .mint(nftInfo.account, nftInfo.id, Number(nftInfo.quantity), nftInfo.data)
      .encodeABI(),
  };
  console.log("buildTxParams()", { txParams });
  return txParams;
};
