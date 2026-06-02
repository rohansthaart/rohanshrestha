import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link href="/">
      <Box display="inline-flex" alignItems="baseline" gap={3}>
        <Text textStyle="micro" color="accent">
          RS
        </Text>
        <Text
          fontFamily="heading"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="700"
          letterSpacing="-0.04em"
          color="ink"
        >
          Rohan Shrestha
        </Text>
      </Box>
    </Link>
  )
}

export default Logo
