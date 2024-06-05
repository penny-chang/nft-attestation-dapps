import backendAxios from "./backendAxios";

export const saveMetadata = (tokenId, nftInfo) => {
  return backendAxios.post(`/token/${tokenId}`, nftInfo);
};
