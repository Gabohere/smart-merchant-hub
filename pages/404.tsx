import { Box } from '@mui/material'
import { SmhLayout } from "../components/layouts"

const Page404 = () => {
  return (
    <SmhLayout title='Page not found' pageDescription='Page not found'>
        <Box 
        
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='calc(100vh - 200px)'
          textAlign='center'>

            <h1>404 - Page Not Found</h1>

        </Box>
    </SmhLayout>
  )
}

export default Page404
