import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CGNET Website">
    <Container>
      <Title>
        CGNET Website<Badge>2025</Badge>
      </Title>
      <P>
      CG NET | CG Communications Limited is Nepal’s leading and the most admired Internet Service Provider company headquartered in the heart of the capital city, Kathmandu.
      </P>
      <>
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Extensive Internet Service Provider: Explore a vast collection of internet services, from classic favorites to trendy services, providing detailed information.
          </ListItem>
            <ListItem>
            Interactive User Interface: The user-friendly interface  makes navigating through the internet services and discovering
            new services an enjoyable experience.
            </ListItem>
          
          
        </List>
        CG NET | CG Communications Limited is Nepal’s leading and the most admired Internet Service Provider company headquartered in the heart of the capital city, Kathmandu.
        <strong>Visit the website:</strong>
        <Link href="https://cgnet.com.np/" target='_blank'>
          https://www.cgnet.com.np/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cgnet.com.np/" target='_blank'>
            https://www.cgnet.com.np/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Tailwind, Laravel</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/cgnetwebsite_01.jpeg" alt="cgnetwebsite" />
      <WorkImage src="/images/works/cgnetwebsite_02.jpeg" alt="cgnetwebsite" />
      <WorkImage src="/images/works/cgnetwebsite_03.jpeg" alt="cgnetwebsite" />

    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
