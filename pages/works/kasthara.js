import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Kasthara">
    <Container>
      <Title>
        Kasthara <Badge>Personalized Crafts</Badge>
      </Title>

      <P>
        Kasthara is a personalized wood engraving studio based in Kathmandu,
        Nepal, creating timeless handmade keepsakes for weddings, gifts, and
        special events. The brand focuses on premium handcrafted wooden products
        with meaningful customization, elegant finishes, and artisan detail.
      </P>

      <>
        <strong>Key Features:</strong>
        <List ml={4} my={2}>
          <ListItem>
            Personalized wood engraving for names, dates, quotes, and memorable
            moments.
          </ListItem>
          <ListItem>
            Wedding-focused products including plaques, signage, keepsakes, and
            return gifts.
          </ListItem>
          <ListItem>
            Custom handmade frames and engraved portrait pieces for meaningful
            gifting.
          </ListItem>
          <ListItem>
            Corporate gift options with logo engraving and premium presentation.
          </ListItem>
          <ListItem>
            Bulk-friendly event souvenirs tailored for birthdays, family events,
            and milestone celebrations.
          </ListItem>
          <ListItem>
            Custom order support for personalized themes, color palettes, and
            event-specific details.
          </ListItem>
        </List>

        Kasthara is designed for people who want their gifts and event pieces to
        feel personal, lasting, and beautifully crafted. From wedding decor to
        engraved corporate gifts, the studio turns meaningful moments into art.
        <strong> Visit the website: </strong>
        <Link href="https://kasthara.com/" isExternal>
          https://kasthara.com/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://kasthara.com/" isExternal>
            https://kasthara.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          <span>Personalized Wood Engraving / Handmade Gifts</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kasthara.png" alt="Kasthara" />
        <WorkImage src="/images/works/kasthara_01.jpeg" alt="Kasthara" />
      
    </Container>
  </Layout>
)

export default Work