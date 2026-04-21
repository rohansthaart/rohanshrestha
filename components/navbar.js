import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const inactiveHoverBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      borderRadius="md"
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      fontWeight={active ? 'semibold' : 'medium'}
      _hover={{ bg: active ? 'grassTeal' : inactiveHoverBg }}
      transition="all 0.2s ease"
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

// eslint-disable-next-line react/display-name
const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = (props) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fbf8f280', '#1f202680')}
      css={{ backdropFilter: 'blur(14px)' }}
      borderBottomWidth="1px"
      borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
      zIndex={10}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={0}
          ml={4}
          spacing={1}
        >
          <LinkItem href="/works" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/graphics" path={path}>
            Design Work
          </LinkItem>
          <LinkItem href="/arts" path={path}>
            Arts
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Projects
                </MenuItem>
                <MenuItem as={MenuLink} href="/graphics">
                  Design Work
                </MenuItem>
                <MenuItem as={MenuLink} href="/arts">
                  Arts
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
