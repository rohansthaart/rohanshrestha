import {
  Container,
  Heading,
  AspectRatio,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, LegalLinks } from '../../components/arts'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ArtThumbnailList from '../../components/art-thumbnail-list'

const Wallpaper = () => (
  <Layout title="Sketch">
    <Container>
      <Title>Sketch</Title>
      <P>
        Welcome to the mesmerizing world of sketches! In this space, I share my
        artistic journey, passion, and creations with you. Explore the beauty of
        each stroke, the depth of every line, and the emotions embedded in every
        sketch. Whether you&apos;re an art enthusiast or a casual observer,
        there&apos;s something special for everyone. Join me in celebrating the
        art of sketching, where imagination meets paper, and creativity knows no
        bounds.
      </P>

      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Box mb={4}>
          <em>
            Follow me on Instagram{' '}
            <a href="https://www.instagram.com/rohanstha.art/" target="_blank">
            <span style={{color:'red'}}>  @rohansthaart</span>
            </a>{' '}
            for a captivating journey through my artistic creations. 🎨✨ Stay
            tuned for daily updates, behind-the-scenes glimpses, and a sprinkle
            of artistic inspiration. Your support means the world to me! 🌟 Feel
            free to share your thoughts and connect with fellow art enthusiasts.
            Let&apos;s make art a shared experience! 🚀 #ArtLovers
            #CreativityUnleashed
          </em>
        </Box>
      </Box>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fcR7N5BSYK4?si=rnlPW2w7SLJcxkoK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </AspectRatio>

      <P>
        {' '}
        Discover the beauty of sketch artistry as we delve into a world of
        creativity and imagination. Our sketches are crafted with passion, each
        stroke telling a unique story. Explore the intricate details, the play
        of light and shadow, and the emotions conveyed through every line.
      </P>

      <Heading as="h2" fontSize={20} my={4}>
        Sketch list
      </Heading>
      <ArtThumbnailList
        numOfImages={9}
        urlForImage={(i) =>
          `/images/arts/sketch/sketch_${String(i).padStart(2, '0')}.jpg`
        }
        alt="sketch"
      />

      <LegalLinks />
    </Container>
  </Layout>
)

export default Wallpaper
export { getServerSideProps } from '../../components/chakra'
