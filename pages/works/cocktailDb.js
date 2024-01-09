import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The Cocktail DB">
    <Container>
      <Title>
        The CocktailDB<Badge>2020</Badge>
      </Title>
      <P>
        The CocktailDB is a delightful project that brings the world of mixology
        to your fingertips. Launched in 2020, this cocktail-centric web
        application is designed to be a go-to resource for cocktail enthusiasts,
        offering a rich and immersive experience in the world of mixed drinks.
      </P>
      <>
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Extensive Cocktail Database: Explore a vast collection of cocktails,
            from classic favorites to trendy concoctions, providing detailed
            recipes and ingredients.
          </ListItem>
          <ListItem>
            Interactive User Interface: The user-friendly interface powered by
            React makes navigating through the cocktail recipes and discovering
            new drinks an enjoyable experience.
          </ListItem>
          <ListItem>
            Platform Compatibility: Access CocktailDB seamlessly on various
            operating systems, including Windows, macOS, and Linux, ensuring
            widespread availability.
          </ListItem>
        </List>
        Whether you&apos;re a seasoned mixologist or a casual cocktail
        enthusiast, CocktailDB offers a virtual bartending experience like no
        other. Discover new recipes, learn about different ingredients, and
        elevate your mixology skills.
        <strong>Visit the website:</strong>
        <Link href="https://cocktail-reactproject.netlify.app/">
          https://cocktail-reactproject.netlify.app/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cocktail-reactproject.netlify.app/">
            https://cocktail-reactproject.netlify.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/cocktaildb.png" alt="cocktailDb" />
    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
