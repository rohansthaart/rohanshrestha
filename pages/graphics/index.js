import { Box, Container, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { GraphicsGridItem } from '../../components/grid-item'

import businessFlyer from '../../public/images/graphics/flyers_autismsansar.png'
import productBrochure from '../../public/images/graphics/banner_autsimsansar.png'
import employeeIdCard from '../../public/images/graphics/id_card_autismsansar.png'
import eventPhotoBooth from '../../public/images/graphics/photobooth_autismsansar.png'
import promotionalLeaflet from '../../public/images/graphics/leaflet_khajaqr.png'
import autismLeaflet from '../../public/images/graphics/leaflet_autismsansar.png'
import kastharaInstagramPost from '../../public/images/graphics/instagram_post_kasthara.png'
import kastharaLogo from '../../public/images/graphics/logo_kasthara.png'
import clipexpenseLogo from '../../public/images/graphics/logo_clipexpense.png'
import cgnetSocialGraphic from '../../public/images/graphics/graphics_cgnet.png'
import pronunlySocialGraphic from '../../public/images/graphics/graphics_pronunly.png'
import shresthaInteractiveGraphic from '../../public/images/graphics/graphics_shrestha_interactive.png'
import autismSansarLogo from '../../public/images/graphics/logo_autism_Sansar.png'
import khajaQrLogo from '../../public/images/graphics/HeroImage_illustration_khajaqr.png'
import pronunlyLogo from '../../public/images/graphics/pronunly_logo.png'

const graphicsProjects = [
  {
    title: 'Business Flyer',
    category: 'Marketing Materials',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A promotional flyer designed for Autism Sansar campaigns and awareness.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: businessFlyer
  },
  {
    title: 'Product Brochure',
    category: 'Print Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A brochure-style banner layout created for Autism Sansar promotional use.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: productBrochure
  },
  {
    title: 'Employee ID Card',
    category: 'Branding / Identity',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'An identity card design system prepared for the Autism Sansar team.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: employeeIdCard
  },
  {
    title: 'Event Photo Booth Frame',
    category: 'Event Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A custom photo booth frame concept designed for Autism Sansar events.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: eventPhotoBooth
  },
  {
    title: 'Promotional Leaflet',
    category: 'Print Design',
    client: 'KhajaQR',
    clientLogo: khajaQrLogo,
    description:
      'A compact leaflet design made for KhajaQR offers and local promotions.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: promotionalLeaflet
  },
  {
    title: 'Kasthara Brand Logo',
    category: 'Branding / Identity',
    client: 'Kasthara',
    clientLogo: kastharaLogo,
    description:
      'A logo direction crafted for Kasthara with a clean and memorable mark.',
    tools: ['Illustrator', 'Photoshop'],
    thumbnail: kastharaLogo
  },
  {
    title: 'Clipexpense Logo',
    category: 'Branding / Identity',
    client: 'Clipexpense',
    clientLogo: clipexpenseLogo,
    description:
      'A product logo concept developed for Clipexpense brand positioning.',
    tools: ['Illustrator'],
    thumbnail: clipexpenseLogo
  },
  {
    title: 'CGNET Social Graphic',
    category: 'Marketing Materials',
    client: 'CGNET',
    clientLogo: cgnetSocialGraphic,
    description:
      'A campaign visual created for CGNET digital and social media use.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: cgnetSocialGraphic
  },
  {
    title: 'Autism Sansar Leaflet',
    category: 'Print Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A service-focused leaflet layout prepared for Autism Sansar outreach.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: autismLeaflet
  },
  {
    title: 'Kasthara Instagram Post',
    category: 'Marketing Materials',
    client: 'Kasthara',
    clientLogo: kastharaLogo,
    description:
      'A social media post creative designed for Kasthara digital campaigns.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: kastharaInstagramPost
  },
  {
    title: 'Pronunly Social Graphic',
    category: 'Marketing Materials',
    client: 'Pronunly',
    clientLogo: pronunlyLogo,
    description:
      'A promotional social graphic created for Pronunly brand communication.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: pronunlySocialGraphic
  },
  {
    title: 'Shrestha Interactive Graphic',
    category: 'Marketing Materials',
    client: 'Shrestha Interactive',
    clientLogo: shresthaInteractiveGraphic,
    description:
      'A campaign graphic designed for Shrestha Interactive promotions.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: shresthaInteractiveGraphic
  }
]

const Graphics = () => {
  const introBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')
  const introBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

  return (
    <Layout title="Graphics">
      <Container>
        <Heading as="h3" fontSize={24} mb={4}>
          Graphics
        </Heading>

        <Box
          my={4}
          p={4}
          borderRadius="xl"
          borderWidth="1px"
          borderColor={introBorder}
          bg={introBg}
          boxShadow={useColorModeValue('card', 'cardDark')}
        >
          Commercial design deliverables including leaflets, ID cards, flyers,
          photobooth frames, logos, social graphics, and other branding assets.
        </Box>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {graphicsProjects.map((project, index) => (
            <Section key={project.title} delay={0.05 * (index + 1)}>
              <GraphicsGridItem
                title={project.title}
                category={project.category}
                client={project.client}
                clientLogo={project.clientLogo}
                description={project.description}
                tools={project.tools}
                thumbnail={project.thumbnail}
              />
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Graphics
