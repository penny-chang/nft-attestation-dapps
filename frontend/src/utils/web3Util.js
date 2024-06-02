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
