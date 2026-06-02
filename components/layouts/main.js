import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" minH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio of Rohan Shrestha, a full-stack developer and visual designer based in Kathmandu."
        />
        <meta name="author" content="Rohan Shrestha" />
        <link rel="shortcut icon" href="/images/logo-dark.png" type="image/x-icon" />
        <title>Rohan Shrestha | Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container
        maxW="1160px"
        pt={{ base: 28, md: 32 }}
        pb={{ base: 16, md: 20 }}
      >
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
