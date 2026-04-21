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
  Stack,
  SimpleGrid,
  Badge,
  Image,
  useColorModeValue
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
      'Shipped web modules end-to-end while collaborating closely on UX details and implementation quality.',
    focus: 'Web module architecture, frontend quality, and UX implementation polish'
  },
  {
    period: '2023/06 - Present',
    role: 'Full-stack Developer',
    company: 'CG Communication',
    summary:
      'Leading production delivery across web products, from UI implementation to backend logic, deployment, and release support.',
    focus: 'Full-stack architecture, production releases, and performance optimization'
  }
]

const proofStats = [
  {
    value: '3+ Years',
    label: 'Shipping production web experiences'
  },
  {
    value: '10+ Projects',
    label: 'Client, product, and visual projects delivered'
  },
  {
    value: 'End-to-End Delivery',
    label: 'Frontend, backend, UI polish, and launch support',
    compact: true
  }
]

const featuredProjects = [
  {
    title: 'Khaja QR',
    href: '/works/khajaqr',
    category: 'Full-stack Product',
    summary:
      'Built a QR-based food ordering experience designed to simplify customer ordering and restaurant operations.',
    contribution: 'Product UI, workflow design, and web implementation',
    stack: 'React, Next.js, product UX'
  },
  {
    title: 'Pronunly',
    href: '/works/pronunly',
    category: 'Frontend Experience',
    summary:
      'Designed and developed an interactive pronunciation practice platform focused on clarity, confidence, and fast feedback.',
    contribution: 'Frontend experience, interaction design, and product polish',
    stack: 'Next.js, Web Audio, responsive UI'
  },
  {
    title: 'CGNET Website',
    href: '/works/cgnetwebsite',
    category: 'Production Website',
    summary:
      'Delivered website work for a major ISP brand with a focus on presentation quality, maintainability, and real-world rollout.',
    contribution: 'Frontend delivery, visual quality, and production support',
    stack: 'Laravel, Tailwind, web delivery'
  }
]

const capabilityAreas = [
  {
    title: 'Product UI Development',
    tags: ['React', 'Chakra UI', 'Design Systems'],
    text:
      'I build interfaces that feel polished, readable, and ready for real users on desktop and mobile.'
  },
  {
    title: 'Full-stack Delivery',
    tags: ['Next.js', 'APIs', 'Deployment'],
    text:
      'I work across frontend, backend integrations, debugging, deployment, and production fixes when products need ownership.'
  },
  {
    title: 'Visual Design Execution',
    tags: ['Brand Assets', 'Campaign Visuals', 'Product Polish'],
    text:
      'I create supporting graphics, brand assets, campaign visuals, and presentation-ready deliverables that keep products cohesive.'
  }
]

const Page = () => {
  const surfaceBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const softText = useColorModeValue('blackAlpha.800', 'whiteAlpha.900')
  const mutedText = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
  const statValueColor = useColorModeValue('teal.700', 'teal.100')
  const statLabelColor = useColorModeValue('gray.700', 'gray.200')
  const profileCardBg = useColorModeValue('white', '#2a2f39')
  const profileNameColor = useColorModeValue('gray.800', 'gray.100')
  const profileMetaColor = useColorModeValue('gray.600', 'gray.300')
  const timelineLine = useColorModeValue('teal.400', 'teal.200')
  const accentText = useColorModeValue('teal.700', 'teal.200')
  const cardShadow = useColorModeValue('card', 'cardDark')
  const cardHoverShadow = useColorModeValue('cardHover', 'cardHoverDark')
  const subtleBg = useColorModeValue('teal.50', 'teal.900')

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="2xl"
          mb={{ base: 6, md: 7 }}
          p={{ base: 4, md: 5 }}
          bg={surfaceBg}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow={cardShadow}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Text
            textTransform="uppercase"
            letterSpacing="0.08em"
            fontSize="xs"
            fontWeight="bold"
            color={accentText}
            mb={2}
          >
            Available For Freelance, Contract, And Full-Time Roles
          </Text>
          <Text color={mutedText}>
            Kathmandu-based full-stack developer and visual designer helping teams
            ship polished products with strong UI, practical architecture, and
            launch-ready execution.
          </Text>
        </Box>

        <Box
          display={{ base: 'block', xl: 'flex' }}
          alignItems="center"
          justifyContent="space-between"
          p={{ base: 5, md: 7 }}
          mb={{ base: 7, md: 8 }}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          bg={subtleBg}
          boxShadow={cardShadow}
        >
          <Box flexGrow={1} maxW={{ base: '100%', xl: '640px' }}>
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
            <Heading as="h1" variant="page-title" lineHeight={1.05} mb={3}>
              Full-stack developer and visual designer building products people
              enjoy using.
            </Heading>
            <Text fontWeight="semibold" color={softText} fontSize={{ base: 'md', md: 'lg' }}>
              I design interfaces, build production-ready web experiences, and
              deliver the visual systems that help products feel finished.
            </Text>
            <Text mt={3} color={mutedText}>
              My strongest fit is with teams that want one person who can move
              confidently between frontend execution, backend-connected delivery,
              UI polish, and real-world shipping pressure.
            </Text>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={3}
              mt={5}
              align={{ base: 'stretch', md: 'center' }}
            >
              <Button
                as={NextLink}
                href="/works"
                rightIcon={<ArrowForwardIcon />}
                variant="subtle"
                width={{ base: 'full', md: 'auto' }}
                h="44px"
                justifyContent="center"
              >
                Explore Projects
              </Button>
              <Button
                as="a"
                href="mailto:rohanstha000@gmail.com"
                variant="subtle"
                leftIcon={<EmailIcon />}
                width={{ base: 'full', md: 'auto' }}
                h="44px"
                justifyContent="center"
              >
                Get In Touch
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/rohan-shrestha-9b11501aa/"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                leftIcon={<IoLogoLinkedin />}
                width={{ base: 'full', md: 'auto' }}
                h="44px"
                justifyContent="center"
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 6, xl: 0 }}
            ml={{ xl: 8 }}
            mx={{ base: 'auto', xl: 0 }}
            w={{ base: '100%', sm: '230px', xl: '240px' }}
            textAlign="center"
            p={{ base: 4, md: 5 }}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={borderColor}
            bg={profileCardBg}
            boxShadow={cardShadow}
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth={{ base: '112px', md: '138px' }}
              display="inline-block"
              borderRadius="full"
              src="/images/rohan.jpg"
              alt="Portrait of Rohan Shrestha"
              boxShadow={cardShadow}
            />
            <Text mt={3} fontWeight="semibold" color={profileNameColor}>
              Rohan Shrestha
            </Text>
            <Text mt={1} fontSize="sm" color={profileMetaColor}>
              Based in Kathmandu, Nepal
            </Text>
          </Box>
        </Box>

        <Section delay={0.06} mb={{ base: 7, md: 8 }}>
          <Box
            p={{ base: 4, md: 6 }}
            borderRadius="2xl"
            borderWidth="1px"
            borderColor={borderColor}
            bg={subtleBg}
            boxShadow={cardShadow}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 3 }}
              spacing={{ base: 3, md: 4, lg: 5 }}
              alignItems="stretch"
            >
            {proofStats.map((item) => (
              <Box
                key={item.value}
                p={{ base: 4, md: 4 }}
                minW={0}
                h="100%"
                borderRadius="xl"
                borderWidth="1px"
                borderColor={borderColor}
                bg={surfaceBg}
                boxShadow={cardShadow}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text
                  fontSize={item.compact ? { base: 'lg', md: 'xl' } : { base: 'xl', md: '2xl' }}
                  lineHeight={1.2}
                  fontWeight="bold"
                  color={statValueColor}
                  mb={1}
                >
                  {item.value}
                </Text>
                <Text color={statLabelColor} lineHeight={1.5} fontSize={{ base: 'sm', md: 'sm' }}>
                  {item.label}
                </Text>
              </Box>
            ))}
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.12} mb={{ base: 8, md: 9 }}>
          <Heading as="h3" variant="section-title">
            Let&apos;s Work Together
          </Heading>
          <Box
            p={{ base: 5, md: 6 }}
            borderRadius="2xl"
            borderWidth="2px"
            borderColor={accentText}
            bg={subtleBg}
            boxShadow={cardShadow}
          >
            <Heading as="h4" size="md" mb={2}>
              Ready to ship a polished product with strong execution?
            </Heading>
            <Text color={mutedText} mb={4}>
              I am open to freelance, contract, and full-time roles where quality,
              clarity, and delivery matter.
            </Text>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={3}
              mb={4}
              align={{ base: 'stretch', md: 'center' }}
            >
              <Button
                as="a"
                href="mailto:rohanstha000@gmail.com"
                variant="subtle"
                leftIcon={<EmailIcon />}
                rightIcon={<ArrowForwardIcon />}
                width={{ base: 'full', md: 'auto' }}
                whiteSpace="normal"
                h="44px"
                justifyContent="center"
              >
                Email Me Now
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/rohan-shrestha-9b11501aa/"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                leftIcon={<IoLogoLinkedin />}
                width={{ base: 'full', md: 'auto' }}
                whiteSpace="normal"
                h="44px"
                justifyContent="center"
              >
                Connect On LinkedIn
              </Button>
            </Stack>

            <Text fontSize="sm" color={mutedText}>
              Based in Kathmandu, Nepal. Comfortable collaborating with remote teams.
            </Text>
          </Box>
        </Section>

        <Section delay={0.18} mb={{ base: 10, md: 12 }}>
          <Heading as="h3" variant="section-title">
            Featured Projects
          </Heading>
          <Text color={mutedText} mb={4}>
            A quick scan of the work that best represents how I design, build,
            and ship products.
          </Text>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 5, md: 6 }}>
            {featuredProjects.map((project, index) => (
              <Box
                key={project.title}
                p={{ base: 5, md: 7 }}
                minW={0}
                borderRadius="2xl"
                borderWidth={index === 0 ? '2px' : '1px'}
                borderColor={index === 0 ? accentText : borderColor}
                bg={index === 0 ? subtleBg : surfaceBg}
                boxShadow={cardShadow}
                display="flex"
                flexDirection="column"
                minH={{ base: 'auto', md: '360px' }}
                transition="all 0.25s ease"
                _hover={{
                  transform: 'translateY(-6px)',
                  boxShadow: cardHoverShadow
                }}
              >
                <Badge colorScheme={index === 0 ? 'green' : 'teal'} mb={3} alignSelf="flex-start">
                  {project.category}
                </Badge>
                <Heading as="h4" size={{ base: 'md', md: 'lg' }} mb={3}>
                  {project.title}
                </Heading>
                <Text color={softText} mb={4} lineHeight={1.75}>
                  {project.summary}
                </Text>
                <Text fontSize="sm" color={mutedText} mb={2}>
                  <Text as="span" fontWeight="semibold" color={softText}>
                    My role:{' '}
                  </Text>
                  {project.contribution}
                </Text>
                <Text fontSize="sm" color={mutedText} mb={4}>
                  <Text as="span" fontWeight="semibold" color={softText}>
                    Focus:{' '}
                  </Text>
                  {project.stack}
                </Text>
                <Button
                  as={NextLink}
                  href={project.href}
                  variant={index === 0 ? 'subtle' : 'ghost'}
                  rightIcon={<ArrowForwardIcon />}
                  mt="auto"
                  alignSelf="flex-start"
                  maxW="100%"
                  whiteSpace="normal"
                >
                  See Case Study
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.24} mb={{ base: 9, md: 10 }}>
          <Heading as="h3" variant="section-title">
            What I Bring
          </Heading>
          <Paragraph>
            I am at my best on projects that need more than isolated coding. I
            help teams turn rough ideas into shippable experiences by combining
            interface thinking, full-stack implementation, and visual execution.
          </Paragraph>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 5, md: 6 }} mt={5}>
            {capabilityAreas.map((item) => (
              <Box
                key={item.title}
                p={{ base: 5, md: 6 }}
                minW={0}
                borderRadius="2xl"
                borderWidth="1px"
                borderColor={borderColor}
                bg={surfaceBg}
                boxShadow={cardShadow}
                minH={{ base: 'auto', md: '250px' }}
                transition="all 0.25s ease"
                _hover={{
                  transform: 'translateY(-6px)',
                  boxShadow: cardHoverShadow
                }}
              >
                <Heading as="h4" size="sm" mb={3}>
                  {item.title}
                </Heading>
                <Stack direction="row" spacing={2} flexWrap="wrap" mb={3}>
                  {item.tags.map((tag) => (
                    <Badge key={tag} colorScheme="teal" variant="subtle">
                      {tag}
                    </Badge>
                  ))}
                </Stack>
                <Text color={mutedText} lineHeight={1.75}>{item.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.36}>
          <Heading as="h3" variant="section-title">
            Experience Timeline
          </Heading>
          <Text color={mutedText} mb={3}>
            My path has moved from engineering fundamentals into end-to-end web
            delivery, with increasing ownership over product quality and release execution.
          </Text>
          <VStack spacing={0} align="stretch" mt={2}>
            {timelineItems.map((item, index) => (
              <Stack
                key={item.period}
                direction={{ base: 'column', md: 'row' }}
                align="flex-start"
                spacing={{ base: 3, md: 5 }}
                position="relative"
                pb={index === timelineItems.length - 1 ? 0 : 8}
              >
                <Box minW={{ base: '100%', md: '138px' }} pt={1}>
                  <Text
                    fontFamily="mono"
                    fontSize="xs"
                    color={mutedText}
                    letterSpacing="0.04em"
                  >
                    {item.period}
                  </Text>
                </Box>

                <Box flex="1" minW={0} position="relative" pl={{ base: 4, md: 5 }}>
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
              </Stack>
            ))}
          </VStack>
        </Section>

        <Section delay={0.42}>
          <Heading as="h3" variant="section-title">
            Outside Work
          </Heading>
          <Paragraph>
            Art, music, movies, books, fitness, and of course coding. That mix
            keeps my design sense sharp and my work grounded in both craft and utility.
          </Paragraph>
        </Section>

        <Section delay={0.48} mb={1}>
          <Heading as="h3" variant="section-title">
            On The Web
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
              <Link
                href="https://github.com/rohansthaart"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                rel="noopener noreferrer"
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
              <Link
                href="https://instagram.com/rohanstha.art"
                target="_blank"
                rel="noopener noreferrer"
              >
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
