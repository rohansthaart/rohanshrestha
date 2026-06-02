import ArtCollectionPage from '../../components/art-collection-page'
import { getArtCollectionBySlug } from '../../lib/content'

const Painting = () => <ArtCollectionPage collection={getArtCollectionBySlug('painting')} />

export default Painting

export { getServerSideProps } from '../../components/chakra'
