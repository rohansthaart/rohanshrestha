import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Planning">
    <Container>
      <Title>
        Planning Management System, Pokhara Metropolitan City{' '}
        <Badge>2022-</Badge>
      </Title>
      <P>
        The Planning Management System for Pokhara Metropolitan City is a
        cutting-edge software solution designed to empower individuals and
        organizations in effectively planning, organizing, and managing their
        projects or tasks. This robust system serves as a centralized platform,
        offering comprehensive tools for creating, assigning, tracking, and
        reporting on tasks, deadlines, and resources.
      </P>

      <>
        {' '}
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Centralized Project Management: The system provides a unified and
            centralized space for project planning, facilitating collaboration
            and communication among team members.
          </ListItem>
          <ListItem>
            Task Assignment and Tracking: Efficiently assign tasks, set
            deadlines, and track the progress of individual tasks, ensuring
            timely completion and project success.
          </ListItem>
          <ListItem>
            Resource Management: Effectively manage and allocate resources,
            optimizing workflow and maximizing productivity throughout the
            planning and execution phases.
          </ListItem>
          <ListItem>
            Cross-Platform Accessibility: Accessible across various operating
            systems, including Windows, macOS, and Linux, ensuring flexibility
            and convenience for users.
          </ListItem>
          <ListItem>
            Technological Stack: Developed using NodeJS and React, the Planning
            Management System embodies a modern and scalable architecture.
          </ListItem>
        </List>
        Experience the transformative power of the Planning Management System,
        fostering enhanced collaboration, efficiency, and success in project
        management.
        <strong>Visit the website:</strong>
        <Link href="https://test.pokharamun.gov.np/">
          https://test.pokharamun.gov.np/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://test.pokharamun.gov.np/">
            https://test.pokharamun,gov.np/
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

      <WorkImage src="/images/works/planning.png" alt="planning" />
      <WorkImage src="/images/works/planning_01.png" alt="planning" />
      <WorkImage src="/images/works/planning_02.png" alt="planning" />
    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
