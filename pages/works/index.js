import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  useColorModeValue
} from '@chakra-ui/react'

import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'

import serviceDelevery from '../../public/images/works/nagarpalika.png'
import richInterior from '../../public/images/works/richInterior.png'
import markDown from '../../public/images/works/markdown.png'
import cocktail from '../../public/images/works/cocktaildb.png'
import planning from '../../public/images/works/planning.png'
import cgnetwebsite from '../../public/images/works/cgnetwebsite.png'
import pronunly from '../../public/images/works/pronunly.png'
import khajaqr from '../../public/images/works/khajaqr.jpeg'
import kasthara from '../../public/images/works/Kasthara.png'
import autismSansar from '../../public/images/works/autismsansar.png'

const Works = () => {
  const introBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')
  const introBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={24} mb={4}>
          Works
        </Heading>
        <Box
          mb={6}
          p={4}
          borderRadius="xl"
          borderWidth="1px"
          borderColor={introBorder}
          bg={introBg}
          boxShadow={useColorModeValue('card', 'cardDark')}
        >
          Websites and web applications I designed and developed with a focus on
          practical UX, clean architecture, and business impact.
        </Box>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="kasthara"
              title="Kasthara"
              thumbnail={kasthara}
            >
              Kasthara is a personalized wood engraving studio based in Kathmandu,
              Nepal, creating timeless handmade keepsakes for weddings, gifts, and
              special events.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="khajaqr"
              title="Khaja QR"
              thumbnail={khajaqr}
            >
              Khaja QR is a modern web-based platform designed to help manage food delivery services through QR code technology, providing a seamless and efficient experience for both customers and restaurant owners.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="pronunly"
              title="Pronunly"
              thumbnail={pronunly}
            >
              Pronunly is a modern web-based pronunciation practice platform designed to help users improve their speaking accuracy, clarity, and confidence through interactive exercises and real-time feedback.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="autismsansar"
              title="Autism Sansar"
              thumbnail={autismSansar}
            >
              Autism Sansar is a platform dedicated autism center, support, and inclusion in Nepal.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="cgnetwebsite"
              title="CGNET Website"
              thumbnail={cgnetwebsite}
            >
              CG NET | CG Communications Limited is Nepal’s leading and the most
              admired Internet Service Provider company headquartered in the
              heart of the capital city, Kathmandu.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="nagarpalika"
              title="Nagarpalika Service Delivery"
              thumbnail={serviceDelevery}
            >
              A technological marvel, serving as a central hub for millions of
              users in phidim
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="planning"
              title="Planning Management System, Pokhara Metropolitan City"
              thumbnail={planning}
            >
              A technological marvel, serving as a central hub for millions of
              users in pokhara
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.1}>
          <Divider my={6} />

          <Heading as="h3" fontSize={22} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="richInterior"
              thumbnail={richInterior}
              title="Rich Interior"
            >
              E-commerce website for interior design company
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="markdown"
              thumbnail={markDown}
              title="Markdown Editor"
            >
              Markdown editor with live preview
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="cocktailDb"
              thumbnail={cocktail}
              title="TheCocktailDB"
            >
              A simple app to search cocktail recipes
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
