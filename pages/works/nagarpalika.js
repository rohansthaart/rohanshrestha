import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Nagarpalika">
    <Container>
      <Title>
        Nagarpalika Service Delevery <Badge>2022-</Badge>
      </Title>
      <P>
        Nagarpalika Service Delivery is a groundbreaking technological
        initiative, serving as a pivotal hub for millions of users within the
        municipality. This state-of-the-art application is meticulously designed
        to revolutionize and elevate civic services, embodying the principles of
        efficient governance, robust security, and intricate microservices
        orchestration.
      </P>

      <>
        {' '}
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Microservices Architecture: The application integrates more than 10
            microservices, including Nagarpalika Wadapatra, Profiling, Sifarish,
            Ijalas, and more, to ensure a comprehensive and efficient service
            delivery ecosystem.
          </ListItem>
          <ListItem>
            Efficient Civic Services: Streamlining municipal processes, the
            platform provides seamless access to essential services, enhancing
            the overall experience for citizens and government officials alike.
          </ListItem>
          <ListItem>
            Multi-Platform Accessibility: Accessible across various operating
            systems, including Windows, macOS, and Linux, ensuring widespread
            availability for users.
          </ListItem>
          <ListItem>
            Technological Stack: Developed using cutting-edge technologies such
            as NodeJS and React, the application embodies a modern and scalable
            architecture.
          </ListItem>
        </List>
        Nagarpalika Service Delivery stands as a testament to the power of
        technology in advancing public services, fostering transparency, and
        empowering citizens. Experience the future of municipal governance by
        exploring the application.
        <strong>Visit the website:</strong>
        <Link href="https://phidim.cliffbyte.com/">
          https://phidim.cliffbyte.com/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>
      <List ml={4} my={4}>
        <ListItem>
          
          <Meta>Website</Meta>
          <Link href="https://phidim.cliffbyte.com/">
            https://phidim.cliffbyte.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/nagarpalika.png" alt="nagarpalika" />
    </Container>
  </Layout>
)

export default Work


//   export { getServerSideProps } from '../../components/chakra' 
