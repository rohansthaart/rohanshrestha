import { Box, Button, HStack, Link, Stack, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      mt={{ base: 16, md: 24 }}
      pt={{ base: 8, md: 10 }}
      borderTopWidth="1px"
      borderColor="line"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'flex-end' }}
        spacing={6}
      >
        <Box maxW="460px">
          <Text textStyle="eyebrow" color="accent" mb={2}>
            Available for freelance, contract, and full-time work
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="600" letterSpacing="-0.03em">
            Building thoughtful products, stronger interfaces, and launch-ready visual systems.
          </Text>
        </Box>

        <Stack spacing={3} align={{ base: 'flex-start', md: 'flex-end' }}>
          <Button
            as="a"
            href="mailto:rohanstha000@gmail.com"
            variant="subtle"
            size="sm"
          >
            rohanstha000@gmail.com
          </Button>
          <HStack spacing={4} color="muted" fontSize="sm">
            <Link href="https://github.com/rohansthaart" isExternal>
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/rohan-shrestha-9b11501aa/" isExternal>
              LinkedIn
            </Link>
            <Link href="https://instagram.com/rohanstha.art" isExternal>
              Instagram
            </Link>
          </HStack>
          <Text color="muted" fontSize="sm">
            © {new Date().getFullYear()} Rohan Shrestha
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
