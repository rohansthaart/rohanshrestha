import { Box, Container, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import sketch from '../../public/images/arts/sketch_1.jpg'
import painting from '../../public/images/arts/painting_1.jpg'
import { ArtGridItem } from '../../components/grid-item'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'

const Arts = () => {
  const introBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')
  const introBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

  return (
    <Layout title="Arts Collection">
      <Container>
        <Heading as="h3" fontSize={24} mb={4}>
          Rohan&apos;s arts
        </Heading>

        <Box
          my={4}
          p={4}
          borderRadius="xl"
          borderWidth="1px"
          borderColor={introBorder}
          bg={introBg}
          boxShadow={useColorModeValue('card', 'cardDark')}
        >
          Drawing and painting explorations from my personal art journey.
          These works focus on emotion, detail, and visual storytelling.
        </Box>

        <Section>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <ArtGridItem id="sketch" title="Sketch" thumbnail={sketch}>
              Graphite and pen-based drawing studies with expressive detailing.
            </ArtGridItem>
            <ArtGridItem id="painting" title="Painting" thumbnail={painting}>
              Color-rich painting works focused on mood, contrast, and texture.
            </ArtGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Arts
// export { getServerSideProps } from '../../components/chakra'
