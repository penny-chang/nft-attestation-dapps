import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

const MintSuccess = ({nftInfo, reset}) =>{
    return <>
        <Stack spacing={2}>
            <Typography variant='h2'>
                鑄造成功！
            </Typography>
            <Box mt={1}>
                <Typography variant='h6'>
                    前往OpenSea查看
                </Typography>
                <Typography variant='body1' sx={{mt:1}} color="primary"  component='a' href={nftInfo?.openSeaUrl} target='_blank'>
                    {nftInfo?.openSeaUrl}
                </Typography>
            </Box>
            <Box>
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
            <Box>
                <Typography variant='h6'>
                    NFT名稱
                </Typography>
                <Typography variant='body1' sx={{mt:1}} color="primary">
                    {nftInfo?.name || "無"}
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6'>
                    NFT描述
                </Typography>
                <Typography variant='body1' sx={{mt:1}} color="primary">
                    {nftInfo?.description || "無"}
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6'>
                    縮圖URL
                </Typography>
                <Typography variant='body1' sx={{mt:1}} color="primary"  component='a' href={nftInfo?.imageUrl} target='_blank'>
                    {nftInfo?.imageUrl || "無"}
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6'>
                    網站URL
                </Typography>
                <Typography variant='body1' sx={{mt:1}} color="primary"  component='a' href={nftInfo?.externalUrl} target='_blank'>
                    {nftInfo?.externalUrl || "無"}
                </Typography>
            </Box>
        </Stack>
        <Button onClick={reset} variant='contained' sx={{mt:2}}>重新鑄造NFT</Button>
    </>
}

export default MintSuccess