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
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={24} mb={4}>
          Projects
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
          Selected product, website, and platform work with a focus on clean UI,
          practical UX, dependable implementation, and real-world delivery.
        </Box>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="kasthara"
              title="Kasthara"
              thumbnail={kasthara}
            >
              Built a polished website presence for a personalized wood engraving
              brand, balancing visual warmth with clear product storytelling.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="khajaqr"
              title="Khaja QR"
              thumbnail={khajaqr}
            >
              Built a QR-driven food ordering platform focused on smoother customer
              journeys and easier restaurant-side operations.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="pronunly"
              title="Pronunly"
              thumbnail={pronunly}
            >
              Designed and developed an interactive pronunciation product with a
              strong emphasis on clarity, engagement, and responsive learning flows.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="autismsansar"
              title="Autism Sansar"
              thumbnail={autismSansar}
            >
              Delivered a mission-driven platform experience supporting accessibility,
              outreach, and inclusion-focused communication.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="cgnetwebsite"
              title="CGNET Website"
              thumbnail={cgnetwebsite}
            >
              Contributed production website delivery for a major ISP brand with
              attention to presentation quality, usability, and maintainability.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="nagarpalika"
              title="Nagarpalika Service Delivery"
              thumbnail={serviceDelevery}
            >
              Helped shape a civic service platform for municipal workflows,
              bringing structure to multi-service digital delivery.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="planning"
              title="Planning Management System, Pokhara Metropolitan City"
              thumbnail={planning}
            >
              Built planning and management workflows for a city-level platform
              focused on coordination, reporting, and operational clarity.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.1}>
          <Divider my={6} />

          <Heading as="h3" fontSize={22} mb={4}>
            Selected Experiments
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="richInterior"
              thumbnail={richInterior}
              title="Rich Interior"
            >
              Early e-commerce website work for an interior design brand.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="markdown"
              thumbnail={markDown}
              title="Markdown Editor"
            >
              A writing-focused editor experiment with live preview.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="cocktailDb"
              thumbnail={cocktail}
              title="TheCocktailDB"
            >
              A lightweight search interface built around external recipe data.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
