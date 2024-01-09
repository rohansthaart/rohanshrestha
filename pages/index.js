import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Image
} from '@chakra-ui/react'

import { EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { ArrowForwardIcon } from '@chakra-ui/icons'

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a full-stack developer based in Nepal!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rohan Shrestha
            </Heading>
            <p>Craftman (Artist / Developer ) </p>
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

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Paragraph>
            Rohan is a web developer and aspiring artist hailing from Kathmandu,
            Nepal. With a fervor for crafting digital experiences, he excels in
            the art of web development. From conceptualizing and designing to
            tackling real-world challenges through code, Rohan finds joy in the
            entire product development lifecycle. Outside the digital realm,
            he&apos;s a fitness enthusiast who embraces the discipline of
            exercise and gym workouts. Whether he&apos;s coding or working on
            his artistic endeavors, Rohan brings creativity and dedication to
            everything he does
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal">
                My Protfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant={'section-title'}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
          </BioSection>
          Born in Kathmandu (काठमाडौं), Nepal.
          <BioSection>
            <BioYear>2017 to 2024</BioYear>
          </BioSection>
          Completed the Bachelor&apos;s in Electronics and Communication at
          Kantipur Engineering College
          <BioSection>
            <BioYear>2022/05 to 2022/11</BioYear>
          </BioSection>
          Worked at S.I.D International
          <BioSection>
            <BioYear>2022/11 to 2023/05</BioYear>
          </BioSection>
          Worked at Cliffbyte
          <BioSection>
            <BioYear>2023/06 to onward</BioYear>
          </BioSection>
          Worked at CG Communication
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I <span style={{color:"red"}}>♥</span>
          </Heading>
          <Paragraph>
            Art, Music, Movies, Books, Fitness, and of course, Coding!
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link _disabled={true} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
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
