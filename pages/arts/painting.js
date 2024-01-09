import {
    Container,
    Heading,
    AspectRatio,
    Box,
    useColorModeValue
} from '@chakra-ui/react';
import { Title, LegalLinks } from '../../components/arts';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import ArtThumbnailList from '../../components/art-thumbnail-list';

const Painting = () => (
    <Layout title="Painting">
        <Container>
            <Title>Painting</Title>
            <P>
                Immerse yourself in the world of captivating paintings! Each stroke on canvas
                tells a unique story, a tale of colors, emotions, and artistic expression.
                Welcome to my gallery, where art comes to life, inviting you to explore the
                beauty and creativity embedded in each masterpiece.
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
                            <span style={{ color: 'red' }}>  @rohansthaart</span>
                        </a>{' '}
                        for a visual journey through my paintings. 🎨✨ Join me in sharing the
                        magic of art, exploring various themes, and discovering the stories
                        behind each canvas. Your support is my inspiration! 🌟 Connect with
                        fellow art lovers and be part of the creative conversation! 🚀
                        #ArtInspiration #PaintingPassion
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
                Embark on a visual journey as we explore the world of painting. From vibrant
                abstracts to serene landscapes, each painting is a testament to creativity and
                artistic expression. Dive into the intricate details, colors, and emotions
                that make each piece a unique work of art.
            </P>

            <Heading as="h2" fontSize={20} my={4}>
                Painting List
            </Heading>
            <ArtThumbnailList
                numOfImages={4}
                urlForImage={(i) =>
                    `/images/arts/painting/painting_${String(i).padStart(2, '0')}.jpg`
                }
                alt="painting"
            />

            <LegalLinks />
        </Container>
    </Layout>
);

export default Painting;
export { getServerSideProps } from '../../components/chakra';
