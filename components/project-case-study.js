import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from './layouts/article'

const MetaRow = ({ label, value, href }) => (
  <Box py={3} borderBottomWidth="1px" borderColor="line">
    <Text textStyle="micro" color="muted" mb={1}>
      {label}
    </Text>
    {href ? (
      <Link href={href} isExternal color="ink" fontWeight="600">
        {value}
      </Link>
    ) : (
      <Text color="ink" fontWeight="600">
        {value}
      </Text>
    )}
  </Box>
)

const ProjectCaseStudy = ({ project }) => {
  if (!project) {
    return null
  }

  return (
    <Layout title={project.title}>
      <Container maxW="1160px">
        <Stack spacing={{ base: 10, md: 14 }}>
          <Box borderBottomWidth="1px" borderColor="line" pb={6}>
            <Link
              as={NextLink}
              href="/works"
              color="muted"
              fontSize="sm"
              fontWeight="600"
            >
              Projects
            </Link>
          </Box>

          <Grid
            templateColumns={{
              base: '1fr',
              xl: 'minmax(0, 0.95fr) minmax(0, 1.05fr)'
            }}
            gap={{ base: 8, xl: 10 }}
            alignItems="start"
          >
            <Stack spacing={6}>
              <Box>
                <Text textStyle="eyebrow" color="accent" mb={3}>
                  {project.category}
                </Text>
                <Heading as="h1" variant="page-title" mb={4}>
                  {project.title}
                </Heading>
                <Text
                  fontSize={{ base: 'lg', md: '2xl' }}
                  lineHeight={1.35}
                  letterSpacing="-0.02em"
                  maxW="24ch"
                  mb={4}
                >
                  {project.summary}
                </Text>
                <Text maxW="60ch" color="muted">
                  {project.intro}
                </Text>
              </Box>

              <Box
                borderWidth="1px"
                borderColor="line"
                borderRadius="24px"
                bg="paperElevated"
                px={{ base: 5, md: 6 }}
                py={{ base: 5, md: 6 }}
              >
                <Grid
                  templateColumns={{
                    base: '1fr',
                    md: 'repeat(2, minmax(0, 1fr))'
                  }}
                  gap={6}
                >
                  <Box>
                    <MetaRow label="Year" value={project.year} />
                    <MetaRow label="Role" value={project.role} />
                  </Box>
                  <Box>
                    <MetaRow label="Focus" value={project.focus} />
                    <MetaRow
                      label="Live URL"
                      value={project.website.replace('https://', '')}
                      href={project.website}
                    />
                  </Box>
                </Grid>

                <Box pt={4}>
                  <Text textStyle="micro" color="muted" mb={3}>
                    Stack
                  </Text>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    {project.stack.map(item => (
                      <Badge key={item} bg="accentMuted" color="accentStrong">
                        {item}
                      </Badge>
                    ))}
                  </Stack>
                </Box>
              </Box>

              <Button
                as="a"
                href={project.website}
                isExternal
                variant="subtle"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
              >
                Visit Live Project
              </Button>
            </Stack>

            <Box
              borderWidth="1px"
              borderColor="line"
              borderRadius="32px"
              overflow="hidden"
              bg="surface"
              boxShadow="card"
              p={{ base: 3, md: 5 }}
            >
              <AspectRatio
                ratio={16 / 11}
                minH={{ base: '260px', md: '420px' }}
              >
                <Box
                  position="relative"
                  borderRadius="26px"
                  overflow="hidden"
                  bg="paper"
                >
                  <NextImage
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 48em) 100vw, 52vw"
                    style={{ objectFit: 'contain', padding: '20px' }}
                  />
                </Box>
              </AspectRatio>
            </Box>
          </Grid>

          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(2, minmax(0, 1fr))' }}
            gap={6}
          >
            <Box
              borderWidth="1px"
              borderColor="line"
              borderRadius="24px"
              bg="paperElevated"
              p={{ base: 5, md: 6 }}
            >
              <Text textStyle="eyebrow" color="accent" mb={4}>
                What Shaped The Work
              </Text>
              <List spacing={3}>
                {project.features.map(feature => (
                  <ListItem key={feature} color="muted" lineHeight={1.8}>
                    {feature}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box
              borderWidth="1px"
              borderColor="line"
              borderRadius="24px"
              bg="paperElevated"
              p={{ base: 5, md: 6 }}
            >
              <Text textStyle="eyebrow" color="accent" mb={4}>
                Delivery Notes
              </Text>
              <List spacing={3}>
                {project.outcomes.map(outcome => (
                  <ListItem key={outcome} color="muted" lineHeight={1.8}>
                    {outcome}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {project.gallery.length > 0 ? (
            <Box>
              <Text textStyle="eyebrow" color="accent" mb={4}>
                Selected Screens
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                {project.gallery.map((image, index) => (
                  <Box
                    key={`${project.slug}-${index}`}
                    borderWidth="1px"
                    borderColor="line"
                    borderRadius="24px"
                    overflow="hidden"
                    bg="paperElevated"
                    boxShadow="card"
                  >
                    <AspectRatio ratio={16 / 10} bg="surface">
                      <Box position="relative" w="100%" h="100%">
                        <NextImage
                          src={image}
                          alt={`${project.title} screen ${index + 1}`}
                          fill
                          sizes="(max-width: 48em) 100vw, 48vw"
                          style={{
                            objectFit: 'contain',
                            padding: index === 0 ? '0px' : '12px'
                          }}
                        />
                      </Box>
                    </AspectRatio>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          ) : null}
        </Stack>
      </Container>
    </Layout>
  )
}

export default ProjectCaseStudy
