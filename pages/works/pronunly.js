import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pronunly">
    <Container>
      <Title>
        Pronunly <Badge>2025</Badge>
      </Title>

      <P>
        Pronunly is a modern web-based pronunciation practice platform designed to help users improve their speaking accuracy, clarity, and confidence through interactive exercises and real-time feedback.
      </P>

      <>
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Pronunciation Practice Engine: Users can practice words and sentences with guided phonetic support and audio playback.
          </ListItem>
          <ListItem>
            Interactive Learning Interface: A clean and intuitive UI that makes daily pronunciation training engaging and easy to use.
          </ListItem>
          <ListItem>
            Progress Tracking: Tracks user performance and improvement over time to encourage consistent learning.
          </ListItem>
        </List>

        <strong>Visit the website:</strong>{' '}
        <Link href="https://pronunly.com" target="_blank">
          https://pronunly.com
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pronunly.com" target="_blank">
            https://pronunly.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Windows / macOS / Linux / Mobile Browsers)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwind CSS, Web Audio API</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pronunly_01.png" alt="pronunly" />
      <WorkImage src="/images/works/pronunly_02.png" alt="pronunly" />
      <WorkImage src="/images/works/pronunly_03.png" alt="pronunly" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
