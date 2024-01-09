import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Markdown">
    <Container>
      <Title>
        MarkDown <Badge>2020</Badge>
      </Title>
      <P>
        Markdown is a versatile and user-friendly web application designed to
        streamline your content creation process. Launched in 2020, this project
        aimed to provide a seamless platform for users to create, edit, and
        preview Markdown documents effortlessly.
      </P>
      <>
        {' '}
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Intuitive Markdown Editor: Enjoy a user-friendly interface for
            writing and editing Markdown content.
          </ListItem>
          <ListItem>
            Real-time Preview: Witness the live preview of your Markdown
            document as you type, ensuring a WYSIWYG (What You See Is What You
            Get) experience.
          </ListItem>
          <ListItem>
            Platform Compatibility: Access Markdown on various operating
            systems, including Windows, macOS, and Linux.
          </ListItem>
          <ListItem>
            React-Powered: Built with React, the application delivers a
            responsive and interactive environment.
          </ListItem>
        </List>
        Whether you&apos;re a seasoned Markdown user or a beginner exploring the
        world of plain text formatting, Markdown provides a convenient space to
        compose your thoughts, write documentation, or create compelling
        content.
        <strong>Visit the website:</strong>
        <Link href="https://resplendent-entremet-7c6794.netlify.app/">
          https://resplendent-entremet-7c6794.netlify.app/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://resplendent-entremet-7c6794.netlify.app/">
            https://resplendent-entremet-7c6794.netlify.app/
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
      <WorkImage src="/images/works/markdown.png" alt="markdown" />
    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
