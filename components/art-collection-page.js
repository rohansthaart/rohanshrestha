import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import Layout from './layouts/article'
import ArtThumbnailList from './art-thumbnail-list'

const ArtCollectionPage = ({ collection }) => {
  if (!collection) {
    return null
  }

  return (
    <Layout title={collection.title}>
      <Container maxW="1160px">
        <Stack spacing={{ base: 8, md: 10 }}>
          <Box borderBottomWidth="1px" borderColor="line" pb={6}>
            <Link href="/arts" color="muted" fontSize="sm" fontWeight="600">
              Arts
            </Link>
          </Box>

          <Stack spacing={4} maxW="760px">
            <Text textStyle="eyebrow" color="accent">
              Personal Collection
            </Text>
            <Heading as="h1" variant="page-title">
              {collection.title}
            </Heading>
            <Text fontSize={{ base: 'lg', md: '2xl' }} lineHeight={1.35} letterSpacing="-0.02em">
              {collection.description}
            </Text>
            <Text color="muted" maxW="62ch">
              {collection.note}
            </Text>
          </Stack>

          <Box
            borderWidth="1px"
            borderColor="line"
            borderRadius="24px"
            bg="paperElevated"
            px={{ base: 5, md: 8 }}
            py={{ base: 5, md: 7 }}
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align={{ base: 'flex-start', md: 'center' }}
              spacing={4}
            >
              <Text maxW="64ch" color="muted">
                {collection.intro}
              </Text>
              <Button as="a" href={collection.instagram} isExternal variant="outline">
                Follow @rohanstha.art
              </Button>
            </Stack>
          </Box>

          <AspectRatio ratio={1.7} maxW="820px">
            <iframe
              src={collection.video}
              title={`${collection.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>

          <Box>
            <Text textStyle="eyebrow" color="accent" mb={4}>
              Gallery
            </Text>
            <ArtThumbnailList
              numOfImages={collection.imageCount}
              urlForImage={collection.imagePath}
              alt={collection.title}
            />
          </Box>
        </Stack>
      </Container>
    </Layout>
  )
}

export default ArtCollectionPage
