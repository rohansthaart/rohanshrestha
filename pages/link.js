import NextImage from 'next/image'
import {
  AspectRatio,
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin
} from 'react-icons/si'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import portraitImage from '../public/images/rohan.jpg'
import kastharaThumb from '../public/images/works/Kasthara.png'
import khajaqrThumb from '../public/images/works/khajaqr.jpeg'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/rohanstha.art',
    handle: '@rohanstha.art',
    note: 'Art, visual work, and behind-the-scenes updates.',
    icon: SiInstagram
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/rohan.shrestha.940/',
    handle: 'Rohan Shrestha',
    note: 'Personal profile and broader public updates.',
    icon: SiFacebook
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohan-shrestha-9b11501aa/',
    handle: 'rohan-shrestha-9b11501aa',
    note: 'Professional background, work history, and contact.',
    icon: SiLinkedin
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rohansthaart',
    handle: '@rohansthaart',
    note: 'Code, experiments, and shipped portfolio work.',
    icon: SiGithub
  }
]

const ownedBrands = [
  {
    title: 'Kasthara',
    href: 'https://kasthara.com/',
    image: kastharaThumb,
    summary:
      'Handcrafted and personalized wood engraving products with a warmer gifting story.',
    label: 'Brand I own'
  },
  {
    title: 'KhajaQR',
    href: 'https://khajaqr.com/',
    image: khajaqrThumb,
    summary:
      'QR ordering platform built for restaurants, cafes, and faster table-side service.',
    label: 'Product I own'
  }
]

const SocialCard = ({ item }) => (
  <Link
    href={item.href}
    isExternal
    display="block"
    _hover={{ textDecoration: 'none' }}
  >
    <Box
      h="100%"
      borderWidth="1px"
      borderColor="line"
      borderRadius="26px"
      bg="paperElevated"
      p={{ base: 5, md: 6 }}
      boxShadow="card"
      transition="transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms cubic-bezier(0.23, 1, 0.32, 1), border-color 180ms cubic-bezier(0.23, 1, 0.32, 1)"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lift',
        borderColor: 'accent'
      }}
    >
      <Stack spacing={4}>
        <HStack justify="space-between" align="start">
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            boxSize="52px"
            borderRadius="18px"
            bg="accentMuted"
            color="accentStrong"
          >
            <Icon as={item.icon} boxSize={5} />
          </Box>
          <ArrowForwardIcon color="accentStrong" boxSize={5} />
        </HStack>

        <Box>
          <Text textStyle="eyebrow" color="accent" mb={2}>
            {item.label}
          </Text>
          <Heading as="h2" size="md" mb={2}>
            {item.handle}
          </Heading>
          <Text color="muted">{item.note}</Text>
        </Box>
      </Stack>
    </Box>
  </Link>
)

const BrandCard = ({ item }) => (
  <Link
    href={item.href}
    isExternal
    display="block"
    _hover={{ textDecoration: 'none' }}
  >
    <Box
      h="100%"
      borderWidth="1px"
      borderColor="line"
      borderRadius="28px"
      overflow="hidden"
      bg="paperElevated"
      boxShadow="card"
      transition="transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms cubic-bezier(0.23, 1, 0.32, 1), border-color 180ms cubic-bezier(0.23, 1, 0.32, 1)"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lift',
        borderColor: 'accent'
      }}
    >
      <AspectRatio ratio={16 / 10}>
        <Box position="relative" w="100%" h="100%" bg="surface">
          <NextImage
            src={item.image}
            alt={item.title}
            fill
            placeholder="blur"
            sizes="(max-width: 48em) 100vw, 420px"
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </AspectRatio>

      <Stack spacing={3} p={{ base: 5, md: 6 }}>
        <HStack justify="space-between" align="center">
          <Text textStyle="eyebrow" color="accent">
            {item.label}
          </Text>
          <ArrowForwardIcon color="accentStrong" boxSize={5} />
        </HStack>
        <Heading as="h2" size="lg">
          {item.title}
        </Heading>
        <Text color="muted">{item.summary}</Text>
        <Text fontSize="sm" fontWeight="600" color="accentStrong">
          Visit website
        </Text>
      </Stack>
    </Box>
  </Link>
)

const LinksPage = () => {
  return (
    <Layout title="Links">
      <Stack spacing={{ base: 10, md: 14 }} maxW="960px" mx="auto">
        <Section mb={0}>
          <Box
            borderWidth="1px"
            borderColor="line"
            borderRadius={{ base: '28px', md: '36px' }}
            bg="paperElevated"
            boxShadow="card"
            overflow="hidden"
          >
            <Grid
              templateColumns={{ base: '1fr', md: '280px minmax(0, 1fr)' }}
              gap={{ base: 0, md: 0 }}
            >
              <Box
                position="relative"
                minH={{ base: '280px', md: '100%' }}
                bg="surface"
              >
                <NextImage
                  src={portraitImage}
                  alt="Portrait of Rohan Shrestha"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 48em) 100vw, 280px"
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              <Stack spacing={5} p={{ base: 6, md: 8 }} justify="center">
                <Text textStyle="eyebrow" color="accent">
                  Visiting Card Links
                </Text>
                <Heading as="h1" variant="page-title" fontSize={{ base: '3xl', md: '5xl' }}>
                  Quick ways to connect with Rohan.
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="muted" maxW="46ch">
                  If you scanned my QR code, this is the fastest path to my
                  social profiles and the products I own.
                </Text>
                <HStack
                  spacing={3}
                  flexWrap="wrap"
                  color="muted"
                  fontSize="sm"
                >
                  <Text
                    px={3}
                    py={2}
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="line"
                    bg="paper"
                  >
                    Kathmandu, Nepal
                  </Text>
                  <Text
                    px={3}
                    py={2}
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="line"
                    bg="paper"
                  >
                    Full-stack Developer
                  </Text>
                  <Text
                    px={3}
                    py={2}
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="line"
                    bg="paper"
                  >
                    Designer
                  </Text>
                </HStack>
              </Stack>
            </Grid>
          </Box>
        </Section>

        <Section mb={0}>
          <Box mb={5}>
            <Text textStyle="eyebrow" color="accent" mb={3}>
              Social Profiles
            </Text>
            <Heading as="h2" variant="section-title">
              Tap the platform you use most.
            </Heading>
            <Text color="muted" maxW="52ch">
              Large cards, clean labels, and direct links so the page works well
              from a phone camera scan.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {socialLinks.map(item => (
              <SocialCard key={item.label} item={item} />
            ))}
          </SimpleGrid>
        </Section>

        <Section mb={0}>
          <Box mb={5}>
            <Text textStyle="eyebrow" color="accent" mb={3}>
              Brands I Own
            </Text>
            <Heading as="h2" variant="section-title">
              Two projects I am actively building.
            </Heading>
            <Text color="muted" maxW="56ch">
              If you want to see what I am building beyond my personal profile,
              these are the best places to start.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {ownedBrands.map(item => (
              <BrandCard key={item.title} item={item} />
            ))}
          </SimpleGrid>
        </Section>
      </Stack>
    </Layout>
  )
}

export default LinksPage
