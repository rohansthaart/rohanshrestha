import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="KhajaQR">
    <Container>
      <Title>
        KhajaQR <Badge>QR Ordering Platform</Badge>
      </Title>

      <P>
        KhajaQR is a QR ordering and table-service platform built for fast-moving
        Nepali cafes and restaurants. It helps businesses reduce queue delays,
        avoid order confusion, and speed up billing by letting customers scan a
        table QR, browse the menu, place orders, track progress, and pay faster
        directly from their browser.
      </P>

      <>
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            QR-first ordering flow: Customers can scan a table QR code and open
            the menu instantly with no app install required.
          </ListItem>
          <ListItem>
            Real-time operations: Orders update live and flow directly to kitchen
            and service teams for smoother peak-hour handling.
          </ListItem>
          <ListItem>
            Local payment support: Built for Nepal with integrations for Fonepay,
            Khalti, and IME Pay.
          </ListItem>
          <ListItem>
            Print automations: Auto-print KOT (Kitchen Order Tokens) to thermal
            printers as soon as an order is confirmed.
          </ListItem>
          <ListItem>
            Menu control tools: Instantly mark items as sold out so customers
            only see what is currently available.
          </ListItem>
          <ListItem>
            Merchant-friendly pricing: KhajaQR uses a flat subscription model
            with 0% commission on food sales.
          </ListItem>
        </List>

        KhajaQR is designed to help cafes serve more tables with the same team,
        improve order accuracy, and create a faster, more convenient dining
        experience for both customers and staff.
        <strong> Visit the website: </strong>
        <Link href="https://khajaqr.com/" isExternal>
          https://khajaqr.com/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://khajaqr.com/" isExternal>
            https://khajaqr.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web / Browser-based</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>QR Ordering, Payments, Real-time Restaurant Operations</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/khajaqr_01.jpeg" alt="KhajaQR" />
    </Container>
  </Layout>
)

export default Work