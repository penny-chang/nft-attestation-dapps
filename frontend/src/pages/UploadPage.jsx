import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Uploader from "../components/Uploader";
import MintTest from "../components/MintTest";
import CreateDescription from "../components/CreateDescription";
import { randomTokenId } from "../utils/tokenUtil";
import { saveMetadata } from "../service/backendService";
import { web3, accountInfo, buildTxParams, createWeb3Service } from "../utils/web3Util";
import { getOpenSeaUrl } from "../utils/stringUtil";

const UploadPage = () => {
  const uploadStage = {
    file:'file',
    description:'description',
    success:'success'
  }
  const [stage, setStage] = useState(uploadStage.file)
  const [nftInfo, setNftInfo] = useState({
    fileName:'',
    fileHash:'',
    name:'',
    description:'',
    imageUrl:'',
    externalUrl:''
  })

  const onUploadDone = (fileName, fileHash) => {
    console.log('onUploadDone()',{fileName, fileHash})
    setNftInfo({...nftInfo, fileName,fileHash})
    setStage(uploadStage.description)
  }

  const mintNFT = async (tokenId) => {
    const params = {
      account: accountInfo?.address,
      id: '0x'+ tokenId,
      quantity: 1,
      data: [], // Additional data here, use `stringToByteArray(dataStr)`
    };
    const txParams = await buildTxParams(params);
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
        onMintDone(tokenId,receipt)
      });
  };

  const onMintDone = (tokenId, receipt) =>{
    console.log('onMintDone() ',tokenId)
    const openSeaUrl = getOpenSeaUrl(tokenId)
    console.log('openSeaUrl:', openSeaUrl)
    // TODO setStage(uploadStage.success)
    // Show nft info and open sea link
  }


  const onMintClick = () =>{
    // Save data to backend
    console.log("onMintClick() nftInfo:",nftInfo)
    const tokenId = randomTokenId()
    saveMetadata(tokenId,nftInfo).then(()=>{
      mintNFT(tokenId)
    })
  }
  useEffect(() => {
    createWeb3Service();
  }, []);

  return (
    <>
      {stage === uploadStage.file &&
        <>
        <Typography variant="h2">上傳您想製成NFT的檔案</Typography>
          <Box mt={2}>
            <Uploader onUploadDone={onUploadDone}/>
          </Box>
        </>
      }
      {stage === uploadStage.description && <Box mt={2}>
          <CreateDescription nftInfo={nftInfo} setNftInfo={setNftInfo} onMintClick={onMintClick}/>
        </Box>
      }
    </>
  );
};

export default UploadPage;
