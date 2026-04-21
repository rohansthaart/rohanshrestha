import NextLink from 'next/link'
import { Box, HStack, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

  return (
    <Box mt={14} pt={6} borderTopWidth="1px" borderColor={borderColor} maxW="100vw" overflowX="clip">
      <Box align="center" opacity={0.8} fontSize="sm" mb={3}>
        &copy; {new Date().getFullYear()} Rohan Shrestha. All Rights Reserved.
      </Box>
      <HStack spacing={5} justify="center" fontSize="sm" opacity={0.85}>
        <Link as={NextLink} href="/works">
          Projects
        </Link>
        <Link as={NextLink} href="/graphics">
          Design Work
        </Link>
        <Link as={NextLink} href="/arts">
          Arts
        </Link>
      </HStack>
    </Box>
  )
}

export default Footer
