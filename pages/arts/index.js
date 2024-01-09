import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'

import sketch from '../../public/images/arts/sketch_1.jpg'
import painting from '../../public/images/arts/painting_1.jpg'
import { WorkGridItem } from '../../components/grid-item'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'

const Arts = () => (
  <Layout title="Arts Collection">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Rohan&apos;s arts
      </Heading>

      <Box my={4}>         Welcome to Rohan&apos;s Arts Collection! Explore the world of
            creativity and expression through various forms of art. Whether
            it&apos;s sketching, painting, or other artistic endeavors, each
            piece tells a unique story and showcases Rohan&apos;s passion for
            the arts. This collection is a testament to the beauty that can be
            created with a stroke of a brush or a sketch on paper. Dive into the
            details, appreciate the nuances, and experience the emotions
            conveyed through Rohan&apos;s artistic journey.</Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem
            category="arts"
            id="sketch"
            title="Sketch"
            thumbnail={sketch}
          >
     Explore Rohan&apos;s sketch collection and witness the intricate details and creativity expressed through each sketch.
          </WorkGridItem>
          <WorkGridItem
            category="arts"
            id="painting"
            title="Painting"
            thumbnail={painting}
          >
           Immerse yourself in Rohan&apos;s painting collection, where each stroke of the brush brings life to vibrant colors and meaningful compositions.
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Arts
// export { getServerSideProps } from '../../components/chakra'
