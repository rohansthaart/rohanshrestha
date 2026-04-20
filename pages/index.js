import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Text,
  Button,
  List,
  ListItem,
  VStack,
  HStack,
  useColorModeValue,
  Image
} from '@chakra-ui/react'

import { EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { ArrowForwardIcon } from '@chakra-ui/icons'

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const timelineItems = [

  {
    period: '2017 - 2024',
    role: 'B.E. Electronics and Communication',
    company: 'Kantipur Engineering College',
    summary:
      'Built a strong systems mindset while exploring product thinking, interface structure, and practical problem solving.',
    focus: 'Engineering fundamentals, systems analysis, and structured problem solving'
  },
  {
    period: '2022/05 - 2022/11',
    role: 'Full-stack Developer',
    company: 'S.I.D International',
    summary:
      'Built and maintained end-to-end features across frontend interfaces and backend services for production client projects.',
    focus: 'Full-stack feature delivery, API integration, and database-connected workflows'
  },
  {
    period: '2022/11 - 2023/05',
    role: 'Web Developer',
    company: 'Cliffbyte',
    summary:
      'Built and shipped web modules end-to-end while collaborating closely on UX details and implementation quality.',
    focus: 'Web module architecture, frontend quality, and UX implementation polish'
  },
  {
    period: '2023/06 - Now',
    role: 'Full-stack Developer',
    company: 'CG Communication',
    summary:
      'Leading full-stack delivery for web products, from frontend implementation to backend logic, deployments, and production fixes.',
    focus: 'Full-stack architecture, production releases, and performance optimization'
  }
]

const Page = () => {
  const surfaceBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const softText = useColorModeValue('blackAlpha.800', 'whiteAlpha.900')
  const mutedText = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
  const timelineLine = useColorModeValue('teal.400', 'teal.200')
  const accentText = useColorModeValue('teal.700', 'teal.200')
  const cardShadow = useColorModeValue('card', 'cardDark')

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="2xl"
          mb={8}
          p={{ base: 4, md: 5 }}
          textAlign="center"
          bg={surfaceBg}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow={useColorModeValue('card', 'cardDark')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Building high-impact digital and visual experiences from Kathmandu.
        </Box>

        <Box
          display={{ base: 'block', md: 'flex' }}
          alignItems="center"
          justifyContent="space-between"
          p={{ base: 5, md: 7 }}
          mb={8}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          bg={useColorModeValue('teal.50', 'teal.900')}
          boxShadow={cardShadow}
        >
          <Box flexGrow={1}>
            <Text
              textTransform="uppercase"
              letterSpacing="0.08em"
              fontSize="xs"
              fontWeight="bold"
              color={accentText}
              mb={2}
            >
              Portfolio
            </Text>
            <Heading as="h1" variant="page-title" lineHeight={1.1} mb={2}>
              Rohan Shrestha
            </Heading>
            <Text fontWeight="semibold" color={softText}>
              Developer, Graphic Designer, and Creative Problem Solver
            </Text>
            <Text mt={2} color={mutedText}>
              I design interfaces, build web experiences, and craft visuals that
              move from concept to real-world impact.
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/rohan.jpg"
              alt="Profile"
            />
          </Box>
        </Box>

        <Section delay={0.08}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Paragraph>
            I build modern web products and visual communication systems with a
            strong focus on clarity, performance, and user impact. My work
            blends frontend development with graphics execution, including brand
            visuals, social creatives, event collateral, and campaign assets
            that work both on screen and in real-world settings.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ArrowForwardIcon />} variant="subtle">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.16}>
          <Heading as="h3" variant="section-title">
            Experience Timeline
          </Heading>
          <Text color={mutedText} mb={3}>
            A clean view of my path across engineering, web delivery, and visual design.
          </Text>
          <VStack spacing={0} align="stretch" mt={2}>
            {timelineItems.map((item, index) => (
              <HStack
                key={item.period}
                align="flex-start"
                spacing={{ base: 3, md: 5 }}
                position="relative"
                pb={index === timelineItems.length - 1 ? 0 : 8}
              >
                <Box minW={{ base: '96px', md: '138px' }} pt={1}>
                  <Text
                    fontFamily="mono"
                    fontSize="xs"
                    color={mutedText}
                    letterSpacing="0.04em"
                  >
                    {item.period}
                  </Text>
                </Box>

                <Box flex="1" position="relative" pl={{ base: 4, md: 5 }}>
                  <Box
                    position="absolute"
                    left={0}
                    top="8px"
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={timelineLine}
                    opacity={0.95}
                  />
                  {index !== timelineItems.length - 1 && (
                    <Box
                      position="absolute"
                      left="3px"
                      top="20px"
                      bottom="-26px"
                      w="1px"
                      bg={timelineLine}
                      opacity={0.45}
                    />
                  )}

                  <Heading as="h4" size="sm" mb={1}>
                    {item.role}
                  </Heading>
                  {item.company && (
                    <Text
                      fontSize="sm"
                      color={accentText}
                      fontWeight="semibold"
                      mb={2}
                    >
                      {item.company}
                    </Text>
                  )}
                  <Text color={softText} mb={2}>
                    {item.summary}
                  </Text>
                  <Text fontSize="sm" color={mutedText}>
                    <Text as="span" fontWeight="semibold" color={softText}>
                      Focus:{' '}
                    </Text>
                    {item.focus}
                  </Text>
                </Box>
              </HStack>
            ))}
          </VStack>
        </Section>

        <Section delay={0.24}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>
            Art, music, movies, books, fitness, and of course coding.
          </Paragraph>
        </Section>

        <Section delay={0.32} mb={1}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List spacing={2}>
            <ListItem>
              <Link href="mailto:rohanstha000@gmail.com">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  width={{ base: 'full', md: 'auto' }}
                  justifyContent="flex-start"
                  leftIcon={<EmailIcon />}
                >
                  rohanstha000@gmail.com
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/rohansthaart" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  width={{ base: 'full', md: 'auto' }}
                  justifyContent="flex-start"
                  leftIcon={<IoLogoGithub />}
                >
                  @rohansthaart
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/rohan-shrestha-9b11501aa/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  width={{ base: 'full', md: 'auto' }}
                  justifyContent="flex-start"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @rohan-shrestha-9b11501aa
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://instagram.com/rohanstha.art" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  width={{ base: 'full', md: 'auto' }}
                  justifyContent="flex-start"
                  leftIcon={<IoLogoInstagram />}
                >
                  @rohanstha.art
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
