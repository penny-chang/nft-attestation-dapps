import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const CreateDescription = ({nftInfo,setNftInfo,onMintClick}) =>{

    const onNftInfoChange = (fieldName, value) =>{
        setNftInfo((prev)=>({...prev,[fieldName]:value}))
    }

    return <><Stack spacing={2}>
                <Typography variant='h2'>
                    輸入NFT資訊
                </Typography>
                <Box mt={1}>
                    <Typography variant='h6'>
                        上傳之檔案名稱
                    </Typography>
                    <Typography variant='body1' color="primary">
                        {nftInfo?.fileName}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6'>
                        上傳之檔案雜湊值
                    </Typography>
                    <Typography variant='body1' color="primary">
                        {nftInfo?.fileHash}
                    </Typography>
                </Box>
                <TextField required fullWidth value={nftInfo.name} onChange={(e)=>onNftInfoChange('name',e.target.value)} label="輸入NFT名稱"/>
                <TextField fullWidth value={nftInfo.description} onChange={(e)=>onNftInfoChange('description',e.target.value)} label="輸入NFT描述"/>
                <TextField fullWidth value={nftInfo.imageUrl} onChange={(e)=>onNftInfoChange('imageUrl',e.target.value)} label="輸入縮圖URL"/>
                <TextField fullWidth value={nftInfo.externalUrl} onChange={(e)=>onNftInfoChange('externalUrl',e.target.value)} label="輸入網站URL"/>
            </Stack>
            <Button variant='contained' onClick={onMintClick} sx={{mt:2}} disabled={!nftInfo?.name || nftInfo?.name === ''}>鑄造NFT</Button>
            </>
}

export default CreateDescription