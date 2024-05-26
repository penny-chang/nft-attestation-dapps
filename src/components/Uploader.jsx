import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { theme } from '../styles/Theme' 

const Uploader = () => {
    const uploaderStyle = {
        border: `2px dashed ${theme.palette.primary.main}`,
        borderRadius: '2px',
        backgroundColor: theme.palette.primary.light,
        textAlign: 'center',
        p: 10,
    }

    const [cursor, setCursor] = useState('')

    const cursorStyle = {
        cursor: cursor,
    }

    const onDrop = (acceptedFiles) => {
        console.log('onDrop() acceptedFiles=', acceptedFiles)
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple:false })

    return (
        <Box width="100%">
            <Box
                width="100%"
                my={1}
                style={cursorStyle}
                onMouseOver={() => setCursor('pointer')}
                onMouseLeave={() => setCursor('')}
            >
                <div {...getRootProps()}>
                    <input {...getInputProps()} id="upload-file-uploader" />
                    <Box sx={{ ...uploaderStyle, p: { xs: 3, sm: 5, md: 10 } }}>
                        <CloudUploadIcon color="primary" sx={{ fontSize: '75px' }} />
                        <Typography variant="body1" color="primary">
                           拖拉或點擊上傳您的檔案
                        </Typography>
                    </Box>
                </div>
            </Box>
        </Box>
    )
}

export default Uploader
