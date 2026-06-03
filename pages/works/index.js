import NextLink from 'next/link'
import {
  AspectRatio,
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import {
  experimentalProjects,
  featuredProjects,
  primaryProjects
} from '../../lib/content'

const Works = () => {
  const featured = featuredProjects[0]

  return (
    <Layout title="Projects">
      <Stack spacing={{ base: 14, md: 18 }}>
        <Section mb={0}>
          <Stack spacing={5} maxW="860px">
            <Text textStyle="eyebrow" color="accent">
              Projects
            </Text>
            <Heading as="h1" variant="page-title" maxW={'full'}>
              Product and website work built to ship.
            </Heading>
            <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} width="100%">
              A selection of full-stack products, public websites, and operational platforms.
              The through-line is ownership: carrying ideas into working interfaces and
              production-ready delivery.
            </Text>
          </Stack>
        </Section>

        {featured ? (
          <Section mb={0}>
            <Box
              borderWidth="1px"
              borderColor="line"
              borderRadius="32px"
              bg="paperElevated"
              overflow="hidden"
            >
              <Grid templateColumns={{ base: '1fr', lg: 'minmax(0, 1.1fr) minmax(360px, 0.9fr)' }}>
                <AspectRatio ratio={1.15} minH={{ base: '260px', lg: '420px' }} bg="surface">
                  <Image
                    src={featured.thumbnail.src}
                    alt={featured.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </AspectRatio>

                <Box p={{ base: 6, md: 8 }}>
                  <Text textStyle="eyebrow" color="accent" mb={4}>
                    Featured Case Study
                  </Text>
                  <Heading as="h2" size="lg" mb={4}>
                    {featured.title}
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: '2xl' }}
                    lineHeight={1.4}
                    letterSpacing="-0.02em"
                    maxW="24ch"
                    mb={4}
                  >
                    {featured.summary}
                  </Text>
                  <Text color="muted" maxW="58ch" mb={6}>
                    {featured.role}
                  </Text>
                  <Button
                    as={NextLink}
                    href={`/works/${featured.slug}`}
                    variant="subtle"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Read featured case study
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Section>
        ) : null}

        <Section mb={0}>
          <Stack spacing={6}>
            <Box>
              <Text textStyle="eyebrow" color="accent" mb={3}>
                Shipping Work
              </Text>
              <Heading as="h2" variant="section-title">
                The main body of shipping work.
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={6}>
              {primaryProjects.map(project => (
                <Box
                  key={project.slug}
                  borderWidth="1px"
                  borderColor="line"
                  borderRadius="28px"
                  bg="paperElevated"
                  overflow="hidden"
                  boxShadow="card"
                >
                  <AspectRatio ratio={16 / 10} bg="surface">
                    <Image
                      src={project.thumbnail.src}
                      alt={project.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </AspectRatio>

                  <Stack spacing={4} p={{ base: 5, md: 6 }}>
                    <Text textStyle="micro" color="accent">
                      {project.category}
                    </Text>
                    <Heading as="h3" size="md">
                      <Link as={NextLink} href={`/works/${project.slug}`}>
                        {project.title}
                      </Link>
                    </Heading>
                    <Text color="muted">{project.summary}</Text>
                    <Button
                      as={NextLink}
                      href={`/works/${project.slug}`}
                      variant="ghost"
                      rightIcon={<ArrowForwardIcon />}
                      alignSelf="flex-start"
                      px={0}
                    >
                      Open case study
                    </Button>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Section>

        <Section mb={0}>
          <Box borderTopWidth="1px" borderColor="line" pt={8}>
            <Text textStyle="eyebrow" color="accent" mb={3}>
              Experiments
            </Text>
            <Heading as="h2" variant="section-title">
              Earlier projects that sharpened the craft.
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              {experimentalProjects.map(project => (
                <Box
                  key={project.slug}
                  borderWidth="1px"
                  borderColor="line"
                  borderRadius="24px"
                  bg="paperElevated"
                  overflow="hidden"
                >
                  <AspectRatio ratio={16 / 10} bg="surface">
                    <Image
                      src={project.thumbnail.src}
                      alt={project.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </AspectRatio>
                  <Stack spacing={3} p={5}>
                    <Text textStyle="micro" color="accent">
                      {project.year}
                    </Text>
                    <Heading as="h3" size="sm">
                      {project.title}
                    </Heading>
                    <Text color="muted">{project.intro}</Text>
                    <Link
                      as={NextLink}
                      href={`/works/${project.slug}`}
                      fontWeight="600"
                      color="accentStrong"
                    >
                      Read more
                    </Link>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Section>
      </Stack>
    </Layout>
  )
}

export default Works
