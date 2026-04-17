import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  const mutedColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box mb={5}>
      <Link as={NextLink} href="/works" color={mutedColor} fontSize="sm">
        Works
      </Link>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={24} mb={1}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ src, alt }) => (
  <Image
    borderRadius="xl"
    borderWidth="1px"
    w="full"
    src={src}
    alt={alt}
    mb={5}
  />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="teal" mr={2}>
    {children}
  </Badge>
)