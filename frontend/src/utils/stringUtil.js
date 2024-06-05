import { contractAddress } from "./web3Util";

export const stringToByteArray = (str) => {
  var myBuffer = [];
  var buffer = Buffer.from(str, "utf8");
  for (var i = 0; i < buffer.length; i++) {
    myBuffer.push(buffer[i]);
  }
  return myBuffer;
};
export const hexStringToBigInt = (hexString) => {
  // Ensure the hex string starts with '0x'
  if (!hexString.startsWith("0x")) {
    hexString = "0x" + hexString;
  }
  return BigInt(hexString);
};

export const getOpenSeaUrl = (tokenId) => {
  const bigIntId = hexStringToBigInt(tokenId);
  return `https://testnets.opensea.io/assets/sepolia/${contractAddress}/${bigIntId}`;
};
