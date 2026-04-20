import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'

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
import eventPhotoBoothPatan from '../../public/images/graphics/photobooth_autismsansar_patan.png'
import autismSansarLogo from '../../public/images/graphics/logo_autism_Sansar.png'
import khajaQrLogo from '../../public/images/graphics/HeroImage_illustration_khajaqr.png'
import pronunlyLogo from '../../public/images/graphics/pronunly_logo.png'
import bannerPatan from '../../public/images/graphics/banner_autsimsansar_patan.png'
import eventPhotoBoothJaulakhel from '../../public/images/graphics/photobooth_autismsansar_jaulakhel.png'
import kastharaLogoRealWorld from '../../public/images/graphics/kasthara_logo_realworld.png'
import productBrochure1 from '../../public/images/graphics/banner_autsimsansar2.png'


const graphicsProjects = [

  {
    id: 'product-brochure',
    title: 'Product Brochure',
    category: 'Print Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A brochure-style banner layout created for Autism Sansar promotional use.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: productBrochure,
    storyText: 'Designed to communicate offerings quickly with a clean, accessible layout.',
    gallery: {
      design: [
        {
          src: productBrochure,
          alt: 'Product brochure layout for Autism Sansar'
        },
         {
          src: productBrochure1,
          alt: 'Product brochure layout for Autism Sansar'
        },
      ],
      realWorld: [     {
          src: bannerPatan,
          alt: 'Banner used at an Autism Sansar event in Patan',
          caption: 'Live event setup in Patan with attendees using the final frame.'
        }]
    }
  },
    {
    id: 'event-photobooth-frame',
    title: 'Event Photo Booth Frame',
    category: 'Event Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A custom photo booth frame concept designed for Autism Sansar events.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: eventPhotoBooth,
    storyText: 'A concept-to-event flow showing how the booth frame performs in real settings.',
    gallery: {
      design: [
        {
          src: eventPhotoBooth,
          alt: 'Photobooth frame design concept for Autism Sansar events'
        },

      ],
      realWorld: [
        {
          src: eventPhotoBoothPatan,
          alt: 'Photobooth frame used at an Autism Sansar event in Patan',
          caption: 'Live event setup in Patan with attendees using the final frame.'
        },
                  {
          src: eventPhotoBoothJaulakhel,
          alt: 'Photobooth frame used at an Autism Sansar event in Jaulakhel',
          caption: 'Live event setup in Jaulakhel with attendees using the final frame.'
        }
      ]
    }
  },
  {
    id: 'employee-id-card',
    title: 'Employee ID Card',
    category: 'Identity Card',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'An identity card design system prepared for the Autism Sansar team.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: employeeIdCard,
    storyText: 'Identity assets built for consistency, readability, and brand trust.',
    gallery: {
      design: [
        {
          src: employeeIdCard,
          alt: 'Employee ID card design system for Autism Sansar'
        }
      ],
      realWorld: [
    
      ]
    }
  },
 
  {
    id: 'promotional-leaflet',
    title: 'Promotional Leaflet',
    category: 'Print Design',
    client: 'KhajaQR',
    clientLogo: khajaQrLogo,
    description:
      'A compact leaflet design made for KhajaQR offers and local promotions.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: promotionalLeaflet,
    storyText: 'Compact print collateral designed for quick offer communication.',
    gallery: {
      design: [
        {
          src: promotionalLeaflet,
          alt: 'Promotional leaflet design for KhajaQR'
        }
      ],
      realWorld: []
    }
  },
    {
    id: 'business-flyer',
    title: 'Business Flyer',
    category: 'Marketing Materials',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A promotional flyer designed for Autism Sansar campaigns and awareness.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: businessFlyer,
    storyText: 'From idea sketches to printable assets that support awareness campaigns.',
    gallery: {
      design: [
        {
          src: businessFlyer,
          alt: 'Business flyer design for Autism Sansar'
        }
      ],
      realWorld: []
    }
  },
 
  {
    id: 'kasthara-brand-logo',
    title: 'Kasthara Brand Logo',
    category: 'Branding / Identity',
    client: 'Kasthara',
    clientLogo: kastharaLogo,
    description:
      'A logo direction crafted for Kasthara with a clean and memorable mark.',
    tools: ['Illustrator', 'Photoshop'],
    thumbnail: kastharaLogo,
    storyText: 'Logo exploration focused on clarity, recall, and versatile brand use.',
    gallery: {
      design: [
        {
          src: kastharaLogo,
          alt: 'Kasthara logo design'
        }
      ],
      realWorld: [{
          src: kastharaLogoRealWorld,
          alt: 'Kasthara logo applied in a real-world context',
          caption: 'The Kasthara logo in use on a storefront sign, demonstrating its real-world application and visibility.'
      }]
    }
  },
  
  {
    id: 'clipexpense-logo',
    title: 'Clipexpense Logo',
    category: 'Branding / Identity',
    client: 'Clipexpense',
    clientLogo: clipexpenseLogo,
    description:
      'A product logo concept developed for Clipexpense brand positioning.',
    tools: ['Illustrator'],
    thumbnail: clipexpenseLogo,
    storyText: 'A minimal mark tailored for digital product recognition.',
    gallery: {
      design: [
        {
          src: clipexpenseLogo,
          alt: 'Clipexpense logo concept'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'cgnet-social-graphic',
    title: 'CGNET Social Graphic',
    category: 'Marketing Materials',
    client: 'CGNET',
    clientLogo: cgnetSocialGraphic,
    description:
      'A campaign visual created for CGNET digital and social media use.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: cgnetSocialGraphic,
    storyText: 'Campaign creative optimized for social-first audience engagement.',
    gallery: {
      design: [
        {
          src: cgnetSocialGraphic,
          alt: 'CGNET social campaign graphic design'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'autism-sansar-leaflet',
    title: 'Autism Sansar Leaflet',
    category: 'Print Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'A service-focused leaflet layout prepared for Autism Sansar outreach.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: autismLeaflet,
    storyText: 'Service messaging transformed into a clean, outreach-ready leaflet.',
    gallery: {
      design: [
        {
          src: autismLeaflet,
          alt: 'Autism Sansar service leaflet layout'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'kasthara-instagram-post',
    title: 'Kasthara Instagram Post',
    category: 'Marketing Materials',
    client: 'Kasthara',
    clientLogo: kastharaLogo,
    description:
      'A social media post creative designed for Kasthara digital campaigns.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: kastharaInstagramPost,
    storyText: 'Social format design built for brand consistency in fast-scroll feeds.',
    gallery: {
      design: [
        {
          src: kastharaInstagramPost,
          alt: 'Kasthara Instagram post creative'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'pronunly-social-graphic',
    title: 'Pronunly Social Graphic',
    category: 'Marketing Materials',
    client: 'Pronunly',
    clientLogo: pronunlyLogo,
    description:
      'A promotional social graphic created for Pronunly brand communication.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: pronunlySocialGraphic,
    storyText: 'Branded graphic direction tuned for clear and confident communication.',
    gallery: {
      design: [
        {
          src: pronunlySocialGraphic,
          alt: 'Pronunly social graphic concept'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'shrestha-interactive-graphic',
    title: 'Shrestha Interactive Graphic',
    category: 'Marketing Materials',
    client: 'Shrestha Interactive',
    clientLogo: shresthaInteractiveGraphic,
    description:
      'A campaign graphic designed for Shrestha Interactive promotions.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: shresthaInteractiveGraphic,
    storyText: 'Campaign visuals shaped for high-impact digital promotions.',
    gallery: {
      design: [
        {
          src: shresthaInteractiveGraphic,
          alt: 'Shrestha Interactive campaign graphic design'
        }
      ],
      realWorld: []
    }
  }
]

const Graphics = () => {
  const introBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')
  const introBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const indexedProjects = graphicsProjects.map((project, index) => ({ project, index }))
  const leftColumnProjects = indexedProjects.filter(item => item.index % 2 === 0)
  const rightColumnProjects = indexedProjects.filter(item => item.index % 2 === 1)

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

        <Box
          display="grid"
          gridTemplateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
          gap={6}
          alignItems="start"
        >
          <Box>
            {leftColumnProjects.map(({ project, index }) => (
              <Box key={`${project.id}-left`} mb={6} w="100%">
                <Section delay={0.05 * (index + 1)} mb={0}>
                  <GraphicsGridItem
                    title={project.title}
                    category={project.category}
                    client={project.client}
                    clientLogo={project.clientLogo}
                    description={project.description}
                    tools={project.tools}
                    thumbnail={project.thumbnail}
                    storyText={project.storyText}
                    gallery={project.gallery}
                  />
                </Section>
              </Box>
            ))}
          </Box>

          <Box>
            {rightColumnProjects.map(({ project, index }) => (
              <Box key={`${project.id}-right`} mb={6} w="100%">
                <Section delay={0.05 * (index + 1)} mb={0}>
                  <GraphicsGridItem
                    title={project.title}
                    category={project.category}
                    client={project.client}
                    clientLogo={project.clientLogo}
                    description={project.description}
                    tools={project.tools}
                    thumbnail={project.thumbnail}
                    storyText={project.storyText}
                    gallery={project.gallery}
                  />
                </Section>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Layout>
  )
}

export default Graphics
