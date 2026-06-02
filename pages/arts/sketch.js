import ArtCollectionPage from '../../components/art-collection-page'
import { getArtCollectionBySlug } from '../../lib/content'

const Sketch = () => <ArtCollectionPage collection={getArtCollectionBySlug('sketch')} />

export default Sketch

export { getServerSideProps } from '../../components/chakra'
