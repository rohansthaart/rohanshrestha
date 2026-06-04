import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'

const navItems = [
  { href: '/', label: 'Home', index: '01' },
  { href: '/works', label: 'Projects', index: '02' },
  { href: '/graphics', label: 'Graphics', index: '03' },
  { href: '/arts', label: 'Arts', index: '04' }
]

const navTransition =
  'transform 160ms cubic-bezier(0.23, 1, 0.32, 1), background-color 160ms cubic-bezier(0.23, 1, 0.32, 1), color 160ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 160ms cubic-bezier(0.23, 1, 0.32, 1)'

const isActivePath = (href, path) =>
  href === '/' ? path === href : path.startsWith(href)

const LinkItem = ({ href, path, children }) => {
  const active = isActivePath(href, path)

  return (
    <Link
      as={NextLink}
      href={href}
      aria-current={active ? 'page' : undefined}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      px={{ md: 3.5, lg: 4 }}
      py={2}
      borderRadius="full"
      fontSize="sm"
      fontWeight="600"
      letterSpacing="-0.01em"
      color={active ? 'accentStrong' : 'muted'}
      bg={active ? 'accentMuted' : 'transparent'}
      boxShadow={active ? '0 1px 0 rgba(47, 111, 104, 0.16) inset' : 'none'}
      transition={navTransition}
      _hover={{
        color: 'ink',
        bg: active ? 'accentMuted' : 'rgba(248, 247, 242, 0.82)',
        transform: 'translateY(-1px)'
      }}
      _active={{
        transform: 'scale(0.98)'
      }}
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
      <Container maxW="1160px" py={{ base: 2.5, md: 2 }}>
        <Flex align="center" justify="space-between" gap={{ base: 4, md: 5 }}>
          <Heading as="h1" size="md">
            <Logo />
          </Heading>

          <Stack
            direction="row"
            spacing={1}
            p={1}
            display={{ base: 'none', md: 'flex' }}
            align="center"
            borderWidth="1px"
            borderColor="rgba(200, 192, 176, 0.9)"
            borderRadius="full"
            bg="rgba(248, 247, 242, 0.72)"
            backdropFilter="blur(16px)"
            boxShadow="0 10px 24px rgba(23, 25, 28, 0.04)"
          >
            {navItems.map(item => (
              <LinkItem key={item.href} href={item.href} path={path}>
                {item.label}
              </LinkItem>
            ))}
          </Stack>

          <Box display={{ base: 'block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    leftIcon={<HamburgerIcon boxSize={4} />}
                    rightIcon={
                      <ChevronDownIcon
                        boxSize={4.5}
                        transition="transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
                        transform={isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'}
                      />
                    }
                    variant="ghost"
                    h="44px"
                    px={4}
                    borderWidth="1px"
                    borderColor="line"
                    borderRadius="full"
                    bg="rgba(248, 247, 242, 0.82)"
                    boxShadow={isOpen ? 'lift' : 'none'}
                    _hover={{ bg: 'paperElevated' }}
                  >
                    Menu
                  </MenuButton>

                  <MenuList
                    mt={3}
                    minW="240px"
                    p={2}
                    borderRadius="24px"
                    borderColor="line"
                    bg="rgba(248, 247, 242, 0.96)"
                    backdropFilter="blur(18px)"
                    boxShadow="lift"
                  >
                    {navItems.map(item => {
                      const active = isActivePath(item.href, path)

                      return (
                        <MenuItem
                          key={item.href}
                          as={MenuLink}
                          href={item.href}
                          aria-current={active ? 'page' : undefined}
                          px={3.5}
                          py={3}
                          borderRadius="18px"
                          bg={active ? 'accentMuted' : 'transparent'}
                          color={active ? 'accentStrong' : 'ink'}
                          transition={navTransition}
                          _hover={{
                            bg: active ? 'accentMuted' : 'surface',
                            color: active ? 'accentStrong' : 'ink'
                          }}
                          _focus={{
                            bg: active ? 'accentMuted' : 'surface'
                          }}
                        >
                          <Flex
                            align="center"
                            justify="space-between"
                            w="full"
                            gap={4}
                          >
                            <Text
                              fontSize="sm"
                              fontWeight="600"
                              letterSpacing="-0.01em"
                              color="inherit"
                            >
                              {item.label}
                            </Text>
                            <Text
                              textStyle="micro"
                              color={active ? 'accentStrong' : 'muted'}
                              opacity={active ? 1 : 0.72}
                            >
                              {item.index}
                            </Text>
                          </Flex>
                        </MenuItem>
                      )
                    })}
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
