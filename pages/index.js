import NextLink from 'next/link'
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiZod
} from 'react-icons/si'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  artCollections,
  featuredProjects,
  graphicsProjects,
  primaryProjects,
  technicalSkillGroups
} from '../lib/content'

const skillIcons = {
  chakraui: SiChakraui,
  docker: SiDocker,
  express: SiExpress,
  nextdotjs: SiNextdotjs,
  nodedotjs: SiNodedotjs,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  react: SiReact,
  reactquery: SiReactquery,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  vitest: SiVitest,
  zod: SiZod
}

const SkillChip = ({ icon, label }) => {
  const SkillIcon = skillIcons[icon]

  return (
    <WrapItem>
      <Box
        as="span"
        display="inline-flex"
        alignItems="center"
        gap={2.5}
        px={3}
        py={2}
        borderRadius="full"
        borderWidth="1px"
        borderColor="line"
        bg="paper"
        color="ink"
        fontSize="sm"
        fontWeight="600"
        letterSpacing="-0.01em"
      >
        <Icon as={SkillIcon} boxSize={4} color="accentStrong" flexShrink={0} />
        <Text as="span" color="inherit">
          {label}
        </Text>
      </Box>
    </WrapItem>
  )
}

const SkillGroupRow = ({ group, index }) => (
  <Box py={{ base: 5, md: 6 }} borderTopWidth={index === 0 ? '0' : '1px'} borderColor="line">
    <Grid templateColumns={{ base: '1fr', md: '180px minmax(0, 1fr)' }} gap={{ base: 4, md: 6 }}>
      <Stack spacing={2}>
        <Text textStyle="micro" color="accent">
          {String(index + 1).padStart(2, '0')}
        </Text>
        <Box>
          <Text fontFamily="heading" fontSize={{ base: 'xl', md: '2xl' }} letterSpacing="-0.04em" mb={2}>
            {group.title}
          </Text>
          <Text color="muted" fontSize="sm" maxW="26ch">
            {group.description}
          </Text>
        </Box>
      </Stack>

      <Wrap spacing={3}>
        {group.items.map(skill => (
          <SkillChip key={skill.name} icon={skill.icon} label={skill.name} />
        ))}
      </Wrap>
    </Grid>
  </Box>
)

const timelineItems = [
  {
    period: '2023 - Present',
    role: 'Full-stack Developer',
    company: 'CG Communication',
    summary:
      'Owning production delivery across web products, from interface implementation to backend-connected rollout support.'
  },
  {
    period: '2022 - 2023',
    role: 'Web Developer',
    company: 'Cliffbyte',
    summary:
      'Built web modules end to end, with growing ownership over UX detail and implementation quality.'
  },
  {
    period: '2022',
    role: 'Full-stack Developer',
    company: 'S.I.D International',
    summary:
      'Delivered full-stack features for client work across interfaces, APIs, and database-connected flows.'
  },
  {
    period: '2017 - 2024',
    role: 'B.E. Electronics and Communication',
    company: 'Kantipur Engineering College',
    summary:
      'Developed a systems mindset that still shapes how I structure products, solve problems, and ship under constraints.'
  }
]

const capabilityAreas = [
  {
    title: 'Product interfaces that feel finished',
    text:
      'I build frontend systems with clear hierarchy, cleaner states, and enough visual discipline to feel trustworthy on first use.'
  },
  {
    title: 'Full-stack ownership when projects get messy',
    text:
      'I am comfortable moving between UI, backend-connected logic, debugging, deployment, and production support when delivery depends on it.'
  },
  {
    title: 'Design sensitivity without the handoff gap',
    text:
      'I can translate brand and visual direction into real screens, assets, and implementation details without losing the original intent.'
  }
]

const proofStats = [
  { value: '5+ years', label: 'building and shipping web work' },
  { value: `${primaryProjects.length}+`, label: 'major projects documented here' },
  { value: `${graphicsProjects.length}+`, label: 'supporting brand and graphic deliverables' }
]

const Home = () => {
  const heroProjects = featuredProjects.slice(0, 2)

  return (
    <Layout>
      <Stack spacing={{ base: 16, md: 20 }}>
        <Section delay={0.04} mb={0}>
          <Grid
            templateColumns={{ base: '1fr', lg: 'minmax(0, 1.1fr) minmax(320px, 0.9fr)' }}
            gap={{ base: 10, lg: 14 }}
            alignItems="start"
          >
            <GridItem>
              <Stack spacing={6}>
                <Text textStyle="eyebrow" color="accent">
                  Hybrid Builder Portfolio
                </Text>
                <Heading as="h1" variant="page-title" maxW={{ base: '11ch', lg: '9ch' }}>
                  Full-stack delivery with a sharper eye for interface quality.
                </Heading>
                <Text
                  fontSize={{ base: 'lg', md: '2xl' }}
                  lineHeight={1.35}
                  letterSpacing="-0.02em"
                  maxW="24ch"
                >
                  I help teams ship products that are technically dependable, visually clear, and ready for real users.
                </Text>
                <Text maxW="62ch" color="muted">
                  Based in Kathmandu, I work across product UI, frontend engineering,
                  backend-connected delivery, and supporting visual systems. The best fit is
                  usually teams who want one person that can carry both execution and polish.
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
                  <Button
                    as={NextLink}
                    href="/works"
                    variant="subtle"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Explore Projects
                  </Button>
                  <Button as="a" href="mailto:rohanstha000@gmail.com" variant="outline">
                    Start a Conversation
                  </Button>
                </Stack>
              </Stack>
            </GridItem>

            <GridItem>
              <Grid templateColumns="repeat(12, 1fr)" gap={4} alignItems="start">
                <Box
                  gridColumn={{ base: '1 / -1', sm: '1 / span 7' }}
                  alignSelf="start"
                  borderRadius="28px"
                  overflow="hidden"
                  borderWidth="1px"
                  borderColor="line"
                  boxShadow="card"
                  bg="paperElevated"
                >
                  <Image
                    src="/images/rohan.jpg"
                    alt="Portrait of Rohan Shrestha"
                    w="100%"
                    h={{ base: '280px', sm: '420px' }}
                    objectFit="cover"
                  />
                </Box>

                <Stack
                  gridColumn={{ base: '1 / -1', sm: '8 / -1' }}
                  spacing={4}
                  justify="space-between"
                >
                  {heroProjects.map(project => (
                    <Box
                      key={project.slug}
                      as={NextLink}
                      href={`/works/${project.slug}`}
                      borderWidth="1px"
                      borderColor="line"
                      borderRadius="22px"
                      overflow="hidden"
                      bg="paperElevated"
                      boxShadow="card"
                      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lift' }}
                      transition="transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms cubic-bezier(0.23, 1, 0.32, 1)"
                    >
                      <Image
                        src={project.thumbnail.src}
                        alt={project.title}
                        w="100%"
                        h={{ base: '120px', sm: '108px', md: '132px' }}
                        objectFit="cover"
                      />
                      <Box p={4}>
                        <Text textStyle="micro" color="accent" mb={2}>
                          {project.label}
                        </Text>
                        <Text fontWeight="700" letterSpacing="-0.03em">
                          {project.title}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        <Section delay={0.08} mb={0}>
          <Stack spacing={6} pt={6} borderTopWidth="1px" borderColor="line">
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3, minmax(0, 1fr))' }}
              gap={{ base: 4, md: 8 }}
            >
              {proofStats.map(item => (
                <Box key={item.label}>
                  <Text fontFamily="heading" fontSize={{ base: '2xl', md: '3xl' }} letterSpacing="-0.05em">
                    {item.value}
                  </Text>
                  <Text color="muted">{item.label}</Text>
                </Box>
              ))}
            </Grid>

            <Box
              borderWidth="1px"
              borderColor="line"
              borderRadius="28px"
              bg="paperElevated"
              p={{ base: 5, md: 7 }}
            >
              <Grid
                templateColumns={{ base: '1fr', lg: 'minmax(0, 280px) minmax(0, 1fr)' }}
                gap={{ base: 8, lg: 10 }}
                alignItems="start"
              >
                <Stack spacing={4}>
                  <Text textStyle="eyebrow" color="accent">
                    Technical Skills
                  </Text>
                  <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} lineHeight={1} maxW="10ch">
                    Selected stack, not a laundry list.
                  </Heading>
                  <Text color="muted" maxW="30ch">
                    The tools below are the ones I would be happy to reach for again on real
                    product work, not every library I have touched once.
                  </Text>
                </Stack>

                <Box>
                  {technicalSkillGroups.map((group, index) => (
                    <SkillGroupRow key={group.title} group={group} index={index} />
                  ))}
                  <Text color="muted" fontSize="sm" pt={5} borderTopWidth="1px" borderColor="line">
                    Also comfortable with Git, REST API integration, Vite, Jest, MongoDB, and AWS
                    EC2 when a project needs them.
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Stack>
        </Section>

        <Section delay={0.12} mb={0}>
          <Grid templateColumns={{ base: '1fr', lg: '320px minmax(0, 1fr)' }} gap={{ base: 8, lg: 12 }}>
            <GridItem>
              <Text textStyle="eyebrow" color="accent" mb={3}>
                Featured Work
              </Text>
              <Heading as="h2" variant="section-title">
                Selected projects that best show how I ship.
              </Heading>
              <Text color="muted">
                These are the projects that best represent the overlap between product thinking,
                implementation quality, and real-world delivery pressure.
              </Text>
            </GridItem>

            <GridItem>
              <Stack spacing={5}>
                {featuredProjects.map((project, index) => (
                  <Box
                    key={project.slug}
                    borderTopWidth={index === 0 ? '0' : '1px'}
                    borderColor="line"
                    pt={index === 0 ? 0 : 5}
                  >
                    <Grid
                      templateColumns={{ base: '1fr', md: '180px minmax(0, 1fr)' }}
                      gap={5}
                      alignItems="start"
                    >
                      <Image
                        src={project.thumbnail.src}
                        alt={project.title}
                        w="100%"
                        h="140px"
                        objectFit="cover"
                        borderRadius="18px"
                        borderWidth="1px"
                        borderColor="line"
                      />
                      <Stack spacing={3}>
                        <Text textStyle="micro" color="accent">
                          {project.category}
                        </Text>
                        <Heading as="h3" size="md">
                          <Link as={NextLink} href={`/works/${project.slug}`}>
                            {project.title}
                          </Link>
                        </Heading>
                        <Text color="muted">{project.summary}</Text>
                        <Link
                          as={NextLink}
                          href={`/works/${project.slug}`}
                          color="accentStrong"
                          fontWeight="600"
                        >
                          Read case study
                        </Link>
                      </Stack>
                    </Grid>
                  </Box>
                ))}
              </Stack>
            </GridItem>
          </Grid>
        </Section>

        <Section delay={0.16} mb={0}>
          <Grid templateColumns={{ base: '1fr', lg: '320px minmax(0, 1fr)' }} gap={{ base: 8, lg: 12 }}>
            <GridItem>
              <Text textStyle="eyebrow" color="accent" mb={3}>
                What I Bring
              </Text>
              <Heading as="h2" variant="section-title">
                More than isolated coding.
              </Heading>
            </GridItem>

            <GridItem>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {capabilityAreas.map(item => (
                  <Box key={item.title} borderTopWidth="1px" borderColor="line" pt={4}>
                    <Heading as="h3" size="sm" mb={3}>
                      {item.title}
                    </Heading>
                    <Text color="muted">{item.text}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </GridItem>
          </Grid>
        </Section>

        <Section delay={0.2} mb={0}>
          <Grid templateColumns={{ base: '1fr', lg: '320px minmax(0, 1fr)' }} gap={{ base: 8, lg: 12 }}>
            <GridItem>
              <Text textStyle="eyebrow" color="accent" mb={3}>
                Experience
              </Text>
              <Heading as="h2" variant="section-title">
                The path from systems thinking to product delivery.
              </Heading>
            </GridItem>

            <GridItem>
              <Stack spacing={0}>
                {timelineItems.map((item, index) => (
                  <Grid
                    key={item.period}
                    templateColumns={{ base: '1fr', md: '140px minmax(0, 1fr)' }}
                    gap={{ base: 3, md: 6 }}
                    py={5}
                    borderTopWidth={index === 0 ? '1px' : '0'}
                    borderBottomWidth="1px"
                    borderColor="line"
                  >
                    <Text textStyle="micro" color="muted">
                      {item.period}
                    </Text>
                    <Box>
                      <Heading as="h3" size="sm" mb={1}>
                        {item.role}
                      </Heading>
                      <Text fontWeight="600" color="accentStrong" mb={2}>
                        {item.company}
                      </Text>
                      <Text color="muted">{item.summary}</Text>
                    </Box>
                  </Grid>
                ))}
              </Stack>
            </GridItem>
          </Grid>
        </Section>

        <Section delay={0.24} mb={0}>
          <Grid templateColumns={{ base: '1fr', lg: '320px minmax(0, 1fr)' }} gap={{ base: 8, lg: 12 }}>
            <GridItem>
              <Text textStyle="eyebrow" color="accent" mb={3}>
                Supporting Disciplines
              </Text>
              <Heading as="h2" variant="section-title">
                Graphics and art sharpen the product work.
              </Heading>
            </GridItem>

            <GridItem>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box borderWidth="1px" borderColor="line" borderRadius="24px" bg="paperElevated" p={5}>
                  <Text textStyle="micro" color="accent" mb={3}>
                    Graphics
                  </Text>
                  <Text fontSize="lg" fontWeight="600" letterSpacing="-0.03em" mb={2}>
                    {graphicsProjects.length}+ brand, social, print, and campaign assets
                  </Text>
                  <Text color="muted" mb={4}>
                    Supporting visual systems that help products and brands feel more coherent in the real world.
                  </Text>
                  <Button as={NextLink} href="/graphics" variant="outline" size="sm">
                    View graphics work
                  </Button>
                </Box>

                <Box borderWidth="1px" borderColor="line" borderRadius="24px" bg="paperElevated" p={5}>
                  <Text textStyle="micro" color="accent" mb={3}>
                    Arts
                  </Text>
                  <Text fontSize="lg" fontWeight="600" letterSpacing="-0.03em" mb={2}>
                    {artCollections.length} personal collections rooted in observation and craft
                  </Text>
                  <Text color="muted" mb={4}>
                    A quieter practice that keeps my sense of composition, detail, and mood from becoming purely technical.
                  </Text>
                  <Button as={NextLink} href="/arts" variant="outline" size="sm">
                    View art collections
                  </Button>
                </Box>
              </SimpleGrid>
            </GridItem>
          </Grid>
        </Section>

        <Section delay={0.28} mb={0}>
          <Box borderWidth="1px" borderColor="line" borderRadius="32px" bg="paperElevated" p={{ base: 6, md: 10 }}>
            <Grid templateColumns={{ base: '1fr', lg: 'minmax(0, 1fr) 280px' }} gap={8} alignItems="end">
              <Box>
                <Text textStyle="eyebrow" color="accent" mb={3}>
                  Let&apos;s Work Together
                </Text>
                <Heading as="h2" variant="section-title" maxW="12ch">
                  If quality and execution both matter, I can help.
                </Heading>
                <Text color="muted" maxW="58ch">
                  I am open to freelance, contract, and full-time roles where I can contribute
                  across interface quality, frontend execution, backend-connected delivery, and
                  launch support.
                </Text>
              </Box>
              <Stack spacing={3}>
                <Button
                  as="a"
                  href="mailto:rohanstha000@gmail.com"
                  variant="subtle"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Email me
                </Button>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/rohan-shrestha-9b11501aa/"
                  isExternal
                  variant="outline"
                >
                  Connect on LinkedIn
                </Button>
              </Stack>
            </Grid>
          </Box>
        </Section>
      </Stack>
    </Layout>
  )
}

export default Home
