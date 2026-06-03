import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Projects' },
  { href: '/graphics', label: 'Graphics' },
  { href: '/arts', label: 'Arts' }
]

const LinkItem = ({ href, path, children }) => {
  const active = href === '/' ? path === href : path.startsWith(href)

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      px={0}
      py={2}
      fontSize="sm"
      fontWeight="600"
      color={active ? 'accent' : 'muted'}
      position="relative"
      _hover={{ color: 'ink' }}
      _after={
        active
          ? {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '1px',
              bg: 'accent'
            }
          : undefined
      }
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef(function MenuLink(props, ref) {
  return <Link ref={ref} as={NextLink} {...props} />
})

const Navbar = ({ path }) => {
  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={20}
      backdropFilter="blur(10px)"
      bg="rgba(243, 241, 234, 0.9)"
      borderBottomWidth="1px"
      borderColor="line"
    >
      <Container maxW="1160px" py={3}>
        <Flex align="center" justify="space-between" gap={6}>
          <Heading as="h1" size="md">
            <Logo />
          </Heading>

          <Stack
            direction="row"
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            align="center"
          >
            {navItems.map(item => (
              <LinkItem key={item.href} href={item.href} path={path}>
                {item.label}
              </LinkItem>
            ))}
          </Stack>

          <Box display={{ base: 'block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                aria-label="Open navigation"
                icon={<HamburgerIcon />}
                variant="outline"
                borderColor="line"
              />
              <MenuList bg="paperElevated" borderColor="line">
                {navItems.map(item => (
                  <MenuItem key={item.href} as={MenuLink} href={item.href} color="ink" _hover={{ bg: 'surface' }}>
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
