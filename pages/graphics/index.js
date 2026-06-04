import { Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { GraphicsGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { graphicsProjects } from '../../lib/content'

const Graphics = () => {
  return (
    <Layout title="Graphics">
      <Stack spacing={{ base: 12, md: 16 }}>
        <Section mb={0}>
          <Stack spacing={5} maxW="860px">
            <Text textStyle="eyebrow" color="accent">
              Graphics
            </Text>
            <Heading as="h1" variant="page-title" maxW={'full'}>
              Supporting visual work for brands and campaigns.
            </Heading>
            <Text
              color="muted"
              fontSize={{ base: 'lg', md: 'xl' }}
              width="100%"
            >
              These pieces sit behind the product work rather than competing
              with it: print collateral, campaign graphics, identity assets, and
              social formats that help brands feel more complete across
              channels.
            </Text>
          </Stack>
        </Section>

        <Section mb={0}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            {graphicsProjects.map((project, index) => (
              <GraphicsGridItem
                key={project.id}
                priority={index < 2}
                {...project}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Stack>
    </Layout>
  )
}

export default Graphics
