
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from '../../components/layouts'

const register = () => {
  return (
    <AuthLayout title={'Register'}>
        <Box sx={{ width:350, padding:'10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1' textAlign='center'>Crear Cuenta</Typography>
                </Grid> 
                <Grid item xs={12}>
                    <TextField className='imput-login-data' label='Usuario'variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField className='imput-login-data' label='Email'variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField className='imput-login-data' label='Contraseña' type='password' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' className='login-btn' size='large' fullWidth>
                        REGISTRARSE
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' alignItems='center' justifyContent='end' gap='10px'>
                    <Link display='flex' gap='10px' href='/auth/login' >
                        <Typography color='secondary' >¿Ya estas registrado?</Typography>
                        <Button className='login-btn' color='secondary'>Login</Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default register