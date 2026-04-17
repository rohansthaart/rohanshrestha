import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  Box,
  Text,
  Badge,
  HStack,
  VStack,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box
    w="100%"
    textAlign="center"
    borderRadius="card"
    bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
    p={3}
    borderWidth="1px"
    borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
    boxShadow={useColorModeValue('card', 'cardDark')}
    transition="all 0.2s ease"
    _hover={{ transform: 'translateY(-4px)', boxShadow: useColorModeValue('cardHover', 'cardHoverDark') }}
  >
    <LinkBox cursor="pointer">
      <NextImage
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box
    w="100%"
    textAlign="center"
    borderRadius="card"
    bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
    p={3}
    borderWidth="1px"
    borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
    boxShadow={useColorModeValue('card', 'cardDark')}
    transition="all 0.2s ease"
    _hover={{ transform: 'translateY(-4px)', boxShadow: useColorModeValue('cardHover', 'cardHoverDark') }}
  >
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <NextImage
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={22} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14} mt={1} color={useColorModeValue('gray.700', 'gray.300')}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export const ArtGridItem = ({ id, title, thumbnail, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalBg = useColorModeValue('white', 'gray.800')

  return (
    <>
      <Box
        w="100%"
        textAlign="center"
        borderRadius="card"
        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
        p={3}
        borderWidth="1px"
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
        boxShadow={useColorModeValue('card', 'cardDark')}
        transition="all 0.2s ease"
        _hover={{ transform: 'translateY(-4px)', boxShadow: useColorModeValue('cardHover', 'cardHoverDark') }}
      >
        <VStack align="stretch" spacing={3}>
          <Box
            cursor="zoom-in"
            onClick={onOpen}
            role="button"
            tabIndex={0}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onOpen()
              }
            }}
          >
            <NextImage
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              placeholder="blur"
            />
          </Box>

          <Text fontSize={22} fontWeight="bold">
            {title}
          </Text>

          <Text fontSize={14} color={useColorModeValue('gray.700', 'gray.300')}>
            {children}
          </Text>

          <HStack justify="space-between">
            <Button
              size="sm"
              variant="ghost"
              onClick={event => {
                event.stopPropagation()
                onOpen()
              }}
            >
              Expand Preview
            </Button>
            <Button as={NextLink} href={`/arts/${id}`} size="sm" variant="subtle">
              View Collection
            </Button>
          </HStack>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg={modalBg}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box borderRadius="lg" overflow="hidden">
              <NextImage
                src={thumbnail}
                alt={`${title} expanded preview`}
                width={1200}
                height={900}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export const GraphicsGridItem = ({
  title,
  category,
  client,
  clientLogo,
  description,
  tools,
  thumbnail
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cardBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const cardShadow = useColorModeValue('card', 'cardDark')
  const cardShadowHover = useColorModeValue('cardHover', 'cardHoverDark')
  const modalBg = useColorModeValue('white', 'gray.800')
  const mutedTextColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <>
      <Box
        w="100%"
        borderRadius="lg"
        p={3}
        bg={cardBg}
        borderWidth="1px"
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
        boxShadow={cardShadow}
        cursor="zoom-in"
        transition="all 0.2s ease"
        _hover={{ transform: 'translateY(-5px)', boxShadow: cardShadowHover }}
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onOpen()
          }
        }}
      >
        <VStack align="stretch" spacing={3}>
          <Box>
            <NextImage
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              placeholder="blur"
            />
          </Box>

          <Text fontSize={20} fontWeight="bold">
            {title}
          </Text>

          <HStack spacing={2} flexWrap="wrap">
            <Badge colorScheme="teal" variant="subtle">
              {category}
            </Badge>
            <Badge colorScheme="green" variant="subtle">
              {client}
            </Badge>
          </HStack>

          <HStack spacing={3} align="center">
            <Box borderRadius="md" overflow="hidden" boxSize="44px" bg="white">
              <NextImage
                src={clientLogo}
                alt={`${client} logo`}
                width={44}
                height={44}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Text fontSize={13} color={mutedTextColor}>
              Client Logo
            </Text>
          </HStack>

          <Text fontSize={14} color={useColorModeValue('gray.700', 'gray.300')}>
            {description}
          </Text>

          <HStack spacing={2} flexWrap="wrap">
            {tools.map((tool) => (
              <Badge key={tool} variant="outline" colorScheme="gray">
                {tool}
              </Badge>
            ))}
          </HStack>

          <Button
            size="sm"
            variant="ghost"
            alignSelf="flex-start"
            onClick={event => {
              event.stopPropagation()
              onOpen()
            }}
          >
            Expand Preview
          </Button>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg={modalBg}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box borderRadius="lg" overflow="hidden">
              <NextImage
                src={thumbnail}
                alt={`${title} expanded preview`}
                width={1200}
                height={900}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}


export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)