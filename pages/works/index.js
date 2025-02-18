import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'

import serviceDelevery from '../../public/images/works/nagarpalika.png'
import richInterior from '../../public/images/works/richInterior.png'
import markDown from '../../public/images/works/markdown.png'
import cocktail from '../../public/images/works/cocktaildb.png'
import planning from '../../public/images/works/planning.png'
import cgnetwebsite from '../../public/images/works/cgnetwebsite.png'


const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
            <WorkGridItem
              id="cgnetwebsite"
              title="CGNET Website"
              thumbnail={cgnetwebsite}
            >
            CG NET | CG Communications Limited is Nepal’s leading and the most admired Internet Service Provider company headquartered in the heart of the capital city, Kathmandu.
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

          <Heading as="h3" fontSize={20} mb={4}>
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
