import React from 'react'
import { Box, Typography } from '@mui/material'
import Uploader from '../components/Uploader'

const UploadPage = () =>{
    return <>
        <Typography variant="h2">上傳您想製成NFT的檔案</Typography>
        <Box mt={2}>
            <Uploader />
        </Box>
    </>
}

export default UploadPage