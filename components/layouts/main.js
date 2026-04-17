import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={10} position="relative" overflow="hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rohan's homepage" />
        <meta name="author" content="Rohan Shrestha" />
        <link
          rel="shortcut icon"
          href="/images/logo-dark.png"
          type="image/x-icon"
        />
        <title>Rohan Shrestha - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Box
        position="absolute"
        top={{ base: -80, md: -120 }}
        left={{ base: -110, md: -160 }}
        w={{ base: '280px', md: '420px' }}
        h={{ base: '280px', md: '420px' }}
        bg="rgba(136, 204, 202, 0.22)"
        borderRadius="full"
        filter="blur(80px)"
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="absolute"
        top={{ base: 140, md: 180 }}
        right={{ base: -130, md: -180 }}
        w={{ base: '320px', md: '460px' }}
        h={{ base: '320px', md: '460px' }}
        bg="rgba(94, 113, 255, 0.18)"
        borderRadius="full"
        filter="blur(95px)"
        pointerEvents="none"
        zIndex={0}
      />

      <Container maxW="container.md" pt={{ base: 20, md: 24 }} position="relative" zIndex={1}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
