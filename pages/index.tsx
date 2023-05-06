import { Grid, Typography } from '@mui/material'
import { SmhLayout } from '../components/layouts'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <SmhLayout title={'Smart Merchant Hub - Home'} pageDescription={'Description - Smart Merchant Hub'}>
      <Typography variant='h1' component='h1'>Smart Merchant Hub</Typography>

      <Grid container spacing={4}>
        <Grid item>
          {/* content */}
        </Grid>
      </Grid>

    </SmhLayout>
  )
}

export default Home
