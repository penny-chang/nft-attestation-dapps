import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Uploader from "../components/Uploader";
import MintTest from "../components/MintTest";
import CreateDescription from "../components/CreateDescription";
import { randomTokenId } from "../utils/tokenUtil";
import { saveMetadata } from "../service/backendService";

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
    // TODO store file hash and display nft description form
    setNftInfo({...nftInfo, fileName,fileHash})
    setStage(uploadStage.description)
  }

  const onMintClick = () =>{
    // Save data to backend
    console.log("onMintClick() nftInfo:",nftInfo)
    const tokenId = randomTokenId()
    saveMetadata(tokenId,nftInfo)
  }

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
