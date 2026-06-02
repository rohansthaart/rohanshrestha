import { Box } from '@chakra-ui/react'

const Section = ({ children, mb = 10 }) => {
  return <Box mb={mb}>{children}</Box>
}

export default Section
