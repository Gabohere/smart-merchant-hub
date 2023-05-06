import '@/styles/globals.css'
import { darkTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { UIProvider } from '../components/ui'

function App ({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}

export default App