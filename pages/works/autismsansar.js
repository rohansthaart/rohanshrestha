import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Autism Sansar">
    <Container>
      <Title>
        Autism Sansar <Badge>Awareness & Support</Badge>
      </Title>

      <P>
        Autism Sansar is a platform dedicated to autism awareness, support, and
        inclusion in Nepal. It aims to help children with autism and their
        families through guidance, community support, educational resources, and
        advocacy for a more understanding and inclusive society.
      </P>

      <>
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Autism awareness resources to help families and communities better
            understand autism spectrum disorder.
          </ListItem>
          <ListItem>
            Family-centered support focused on guidance, acceptance, and
            practical help for parents and caregivers.
          </ListItem>
          <ListItem>
            Educational and developmental support that encourages inclusion and
            skill-building for children with autism.
          </ListItem>
          <ListItem>
            Advocacy for dignity, equal opportunity, and stronger community
            support for individuals with autism.
          </ListItem>
          <ListItem>
            Programs and outreach designed to build acceptance and improve
            quality of life for persons with autism.
          </ListItem>
          <ListItem>
            A mission-driven platform that promotes empowerment, early support,
            and social inclusion.
          </ListItem>
        </List>

        Autism Sansar is built to support families navigating autism with more
        confidence, access to information, and a stronger sense of community. It
        reflects a purpose-driven effort to create awareness, encourage
        acceptance, and improve opportunities for children with autism in Nepal.
        <strong> Visit the website: </strong>
        <Link href="https://autismsansar.com.np/" isExternal>
          https://autismsansar.com.np/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://autismsansar.com.np/" isExternal>
            https://autismsansar.com.np/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          <span>Autism Awareness / Family Support / Inclusion</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/autismsansar.png" alt="Autism Sansar" />
         <WorkImage src="/images/works/autismsansar_01.jpeg" alt="Autism Sansar" />
    </Container>
  </Layout>
)

export default Work