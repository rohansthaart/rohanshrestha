import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';
import VoxelDogLoader from '../voxel-dog-loader';

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6826094653008649"
     crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rohan's homepage" />
        <meta name="author" content="Rohan Shrestha" />
        <link
          rel="shortcut icon"
          href="/images/logo-dark.png"
          type="image/x-icon"
        />
        <title>Rohan Shrestha - Homepageeeee</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

     
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
