import { Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { ArtGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { artCollections } from '../../lib/content'

const Arts = () => {
  return (
    <Layout title="Arts Collection">
      <Stack spacing={{ base: 12, md: 16 }}>
        <Section mb={0}>
          <Stack spacing={5} maxW="860px">
            <Text textStyle="eyebrow" color="accent">
              Arts
            </Text>
            <Heading as="h1" variant="page-title" maxW={'full'}>
              Personal work that keeps the eye honest.
            </Heading>
            <Text
              color="muted"
              fontSize={{ base: 'lg', md: 'xl' }}
              width="100%"
            >
              Drawing and painting are part of how I keep observing, composing,
              and paying attention to detail outside of software.
            </Text>
          </Stack>
        </Section>

        <Section mb={0}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {artCollections.map((collection, index) => (
              <ArtGridItem
                key={collection.slug}
                id={collection.slug}
                title={collection.title}
                thumbnail={collection.thumbnail}
                priority={index === 0}
              >
                {collection.intro}
              </ArtGridItem>
            ))}
          </SimpleGrid>
        </Section>
      </Stack>
    </Layout>
  )
}

export default Arts
