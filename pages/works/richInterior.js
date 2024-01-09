import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rich Interior">
    <Container>
      <Title>
        Rich Interior <Badge>2020</Badge>
      </Title>
      <P>
        Rich Interior is a sophisticated e-commerce platform tailored
        specifically for interior design enthusiasts. This project, initiated in
        2020, aimed to create a seamless and visually appealing experience for
        users looking to explore and purchase premium interior design products.
        The website boasts a modern and intuitive design, allowing users to
        navigate through a curated collection of high-quality furniture, decor,
        and accessories. With a focus on user experience, Rich Interior provides
        a virtual showroom where customers can visualize how different pieces
        may complement their living spaces. Leveraging the power of React, the
        website delivers a responsive and interactive interface, ensuring a
        smooth experience across various platforms, including Windows, macOS,
        and Linux.
      </P>
      <>
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Curated Collection: Browse a carefully curated selection of interior
            design products.
          </ListItem>
          <ListItem>
            Virtual Showroom: Visualize how furniture and decor items will look
            in your own space.
          </ListItem>
          <ListItem>
            Responsive Design: Enjoy a seamless experience on Windows, macOS,
            and Linux.
          </ListItem>
        </List>
        Explore Rich Interior and elevate your home decor with our exquisite
        range of products.
        <strong>Visit the website:</strong>
        <Link href="https://rich-interior.netlify.app/">
          https://rich-interior.netlify.app/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rich-interior.netlify.app/">
            https://rich-interior.netlify.app/
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
      <WorkImage src="/images/works/richInterior.png" alt="rich Interior" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/richInterior_01.png"
          alt="rich Interior"
        />
        <WorkImage
          src="/images/works/richInterior_02.png"
          alt="rich Interior"
        />
      </SimpleGrid>
      <WorkImage src="/images/works/richInterior_03.png" alt="rich Interior" />
    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
