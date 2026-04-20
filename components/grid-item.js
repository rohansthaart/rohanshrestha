import NextLink from 'next/link'
import NextImage from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Center,
  Text,
  Badge,
  HStack,
  VStack,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
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
  thumbnail,
  storyText,
  gallery
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [tabIndex, setTabIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const designImages = useMemo(() => gallery?.design ?? [], [gallery])
  const realWorldImages = useMemo(() => gallery?.realWorld ?? [], [gallery])
  const tabImages = tabIndex === 0 ? designImages : realWorldImages

  useEffect(() => {
    if (!isOpen) {
      setTabIndex(0)
      setSelectedImage(null)
      return
    }

    if (tabImages.length > 0) {
      setSelectedImage(tabImages[0])
    } else {
      setSelectedImage(null)
    }
  }, [isOpen, tabIndex, tabImages])

  const cardBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const cardShadow = useColorModeValue('card', 'cardDark')
  const cardShadowHover = useColorModeValue('cardHover', 'cardHoverDark')
  const modalBg = useColorModeValue('white', 'gray.800')
  const panelBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const previewBg = useColorModeValue('gray.100', 'blackAlpha.500')
  const pickerBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const softBorderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const selectedThumbBorder = useColorModeValue('teal.500', 'teal.200')
  const mutedTextColor = useColorModeValue('gray.600', 'gray.300')

  const renderGalleryPanel = (images, emptyStateText, previewLabel) => (
    <VStack align="stretch" spacing={3} h="100%" minH={0} overflow="hidden">
      <Box
        flex="1 1 0%"
        minH={0}
        borderRadius="lg"
        overflow="hidden"
        bg={panelBg}
        borderWidth="1px"
        borderColor={softBorderColor}
        p={3}
      >
        {selectedImage ? (
          <VStack align="stretch" spacing={2} h="100%">
            <Box
              position="relative"
              flex="1"
              minH={0}
              borderRadius="md"
              overflow="hidden"
              bg={previewBg}
            >
              <NextImage
                src={selectedImage.src}
                alt={selectedImage.alt || `${title} ${previewLabel} preview`}
                fill
                sizes="(max-width: 768px) 95vw, 85vw"
                style={{ objectFit: 'contain' }}
              />
            </Box>
            {selectedImage.caption ? (
              <Text fontSize={13} color={mutedTextColor} noOfLines={2}>
                {selectedImage.caption}
              </Text>
            ) : null}
          </VStack>
        ) : (
          <Center h="100%">
            <Text fontSize={14} color={mutedTextColor}>
              {emptyStateText}
            </Text>
          </Center>
        )}
      </Box>

      <Box
        flex="0 0 20%"
        minH={['84px', '96px', '112px']}
        maxH={['112px', '128px', '144px']}
        borderRadius="md"
        borderWidth="1px"
        borderColor={softBorderColor}
        bg={pickerBg}
        p={2}
        overflowX="auto"
        overflowY="hidden"
      >
        {images.length > 0 ? (
          <HStack align="stretch" spacing={2} h="100%" minW="max-content" pr={1}>
            {images.map((image, imageIndex) => {
              const isActive = selectedImage?.src === image.src

              return (
                <Button
                  key={`${title}-${previewLabel}-${imageIndex}`}
                  variant="unstyled"
                  height="100%"
                  minW={['84px', '96px', '112px']}
                  p={0}
                  onClick={() => setSelectedImage(image)}
                  textAlign="left"
                >
                  <VStack
                    align="stretch"
                    spacing={1}
                    h="100%"
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={isActive ? selectedThumbBorder : softBorderColor}
                    p={1}
                    transition="all 0.2s ease"
                  >
                    <Box
                      flex="1"
                      minH={0}
                      borderRadius="sm"
                      overflow="hidden"
                      position="relative"
                      bg={previewBg}
                    >
                      <NextImage
                        src={image.src}
                        alt={image.alt || `${title} ${previewLabel} thumbnail ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 30vw, 12vw"
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  </VStack>
                </Button>
              )
            })}
          </HStack>
        ) : (
          <Center h="100%">
            <Text fontSize={13} color={mutedTextColor}>
              {emptyStateText}
            </Text>
          </Center>
        )}
      </Box>
    </VStack>
  )

  return (
    <>
      <Box
        w="100%"
        borderRadius="lg"
        p={3}
        bg={cardBg}
        borderWidth="1px"
        borderColor={softBorderColor}
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

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent bg={modalBg} maxW={['95vw', '92vw', '88vw']} h={['90vh', '88vh', '86vh']}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4} overflow="hidden">
            <VStack align="stretch" spacing={4} h="100%" minH={0}>
              <Text fontSize={14} color={mutedTextColor}>
                {storyText || 'From concept to real-world use.'}
              </Text>

              <Tabs
                index={tabIndex}
                onChange={(nextIndex) => setTabIndex(nextIndex)}
                colorScheme="teal"
                variant="soft-rounded"
                display="flex"
                flexDirection="column"
                flex="1"
                minH={0}
              >
                <TabList>
                  <Tab>Design ({designImages.length})</Tab>
                  <Tab>Real-World ({realWorldImages.length})</Tab>
                </TabList>

                <TabPanels flex="1" minH={0} overflow="hidden">
                  <TabPanel p={0} pt={3} h="100%" minH={0} overflow="hidden">
                    {renderGalleryPanel(designImages, 'No design images added yet.', 'design')}
                  </TabPanel>

                  <TabPanel p={0} pt={3} h="100%" minH={0} overflow="hidden">
                    {renderGalleryPanel(realWorldImages, 'No real-world photos available yet.', 'real-world')}
                  </TabPanel>
                </TabPanels>
              </Tabs>

              {!selectedImage && designImages.length === 0 && realWorldImages.length === 0 ? (
                <Box borderRadius="md" bg={panelBg} p={3}>
                  <Text fontSize={14} color={mutedTextColor}>
                    Gallery items are being organized for this project.
                  </Text>
                </Box>
              ) : null}
            </VStack>
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