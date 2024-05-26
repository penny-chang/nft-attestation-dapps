import React from 'react'
import { Box, StyledEngineProvider, ThemeProvider } from '@mui/material'
import UploadPage from './pages/UploadPage'
import { theme } from './styles/Theme'

const App = () => {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box p={2}>
          <UploadPage/>
        </Box>
      </ThemeProvider>
   </StyledEngineProvider>
  )
}

export default App
