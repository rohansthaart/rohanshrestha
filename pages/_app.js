import { ChakraProvider, Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from 'next/font/google'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap'
})

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
      >
        <Layout router={router}>
          <AnimatePresence mode="wait" initial>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Box>
    </ChakraProvider>
  )
}

export default Website
