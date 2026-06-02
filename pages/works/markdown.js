import ProjectCaseStudy from '../../components/project-case-study'
import { getWorkBySlug } from '../../lib/content'

const Work = () => <ProjectCaseStudy project={getWorkBySlug('markdown')} />

export default Work
