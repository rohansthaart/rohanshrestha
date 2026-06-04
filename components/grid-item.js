import NextLink from 'next/link'
import NextImage from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  HStack,
  LinkBox,
  LinkOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

const cardTransition =
  'transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms cubic-bezier(0.23, 1, 0.32, 1), border-color 180ms cubic-bezier(0.23, 1, 0.32, 1)'

const SurfaceCard = ({ children, ...props }) => (
  <Box
    w="100%"
    borderRadius="24px"
    bg="paperElevated"
    borderWidth="1px"
    borderColor="line"
    boxShadow="card"
    transition={cardTransition}
    _hover={{
      transform: 'translateY(-2px)',
      boxShadow: 'lift',
      borderColor: 'accent'
    }}
    {...props}
  >
    {children}
  </Box>
)

export const GridItem = ({ children, href, title, thumbnail }) => (
  <SurfaceCard p={3}>
    <LinkBox cursor="pointer">
      <NextImage
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        sizes="(max-width: 48em) 100vw, 33vw"
        style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={3} fontWeight="700">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize="sm" color="muted">
        {children}
      </Text>
    </LinkBox>
  </SurfaceCard>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <SurfaceCard p={3}>
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
        sizes="(max-width: 48em) 100vw, 33vw"
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={3} fontSize="xl" fontWeight="700" letterSpacing="-0.03em">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize="sm" mt={2} color="muted">
        {children}
      </Text>
    </LinkBox>
  </SurfaceCard>
)

export const ArtGridItem = ({
  id,
  title,
  thumbnail,
  children,
  priority = false
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <SurfaceCard p={3}>
        <VStack align="stretch" spacing={4}>
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
            <AspectRatio
              ratio={4 / 3}
              bg="surface"
              borderRadius="18px"
              overflow="hidden"
            >
              <NextImage
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                priority={priority}
                sizes="(max-width: 48em) 100vw, 50vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AspectRatio>
          </Box>

          <Box>
            <Text textStyle="micro" color="accent" mb={2}>
              Collection
            </Text>
            <Text fontSize="xl" fontWeight="700" letterSpacing="-0.03em" mb={2}>
              {title}
            </Text>
            <Text fontSize="sm" color="muted">
              {children}
            </Text>
          </Box>

          <HStack justify="space-between">
            <Button size="sm" variant="ghost" onClick={onOpen}>
              Expand
            </Button>
            <Button
              as={NextLink}
              href={`/arts/${id}`}
              size="sm"
              variant="outline"
            >
              Open collection
            </Button>
          </HStack>
        </VStack>
      </SurfaceCard>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay bg="rgba(23, 25, 28, 0.5)" />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box borderRadius="20px" overflow="hidden">
              <NextImage
                src={thumbnail}
                alt={`${title} expanded preview`}
                width={1200}
                height={900}
                sizes="(max-width: 48em) 92vw, 72vw"
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
  priority = false,
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

    setSelectedImage(tabImages[0] ?? null)
  }, [isOpen, tabImages])

  const renderGalleryPanel = (images, emptyStateText, previewLabel) => (
    <VStack align="stretch" spacing={4} h="100%" minH={0}>
      <Box
        flex="1 1 0%"
        minH="360px"
        borderRadius="20px"
        overflow="hidden"
        bg="surface"
        borderWidth="1px"
        borderColor="line"
        p={3}
      >
        {selectedImage ? (
          <VStack align="stretch" spacing={3} h="100%">
            <Box
              position="relative"
              flex="1"
              minH={0}
              borderRadius="16px"
              overflow="hidden"
              bg="paper"
            >
              <NextImage
                src={selectedImage.src}
                alt={selectedImage.alt || `${title} ${previewLabel} preview`}
                fill
                sizes="(max-width: 768px) 95vw, 80vw"
                style={{ objectFit: 'contain' }}
              />
            </Box>
            {selectedImage.caption ? (
              <Text fontSize="sm" color="muted">
                {selectedImage.caption}
              </Text>
            ) : null}
          </VStack>
        ) : (
          <Center h="100%">
            <Text fontSize="sm" color="muted">
              {emptyStateText}
            </Text>
          </Center>
        )}
      </Box>

      <Box
        borderRadius="18px"
        borderWidth="1px"
        borderColor="line"
        bg="paper"
        p={2}
        overflowX="auto"
      >
        {images.length > 0 ? (
          <HStack align="stretch" spacing={2} minW="max-content">
            {images.map((image, imageIndex) => {
              const isActive = selectedImage?.src === image.src

              return (
                <Button
                  key={`${title}-${previewLabel}-${imageIndex}`}
                  variant="unstyled"
                  h="96px"
                  minW="112px"
                  p={0}
                  onClick={() => setSelectedImage(image)}
                >
                  <Box
                    h="100%"
                    borderRadius="14px"
                    borderWidth="1px"
                    borderColor={isActive ? 'accent' : 'line'}
                    overflow="hidden"
                    position="relative"
                    bg="paperElevated"
                  >
                    <NextImage
                      src={image.src}
                      alt={
                        image.alt ||
                        `${title} ${previewLabel} thumbnail ${imageIndex + 1}`
                      }
                      fill
                      sizes="160px"
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Button>
              )
            })}
          </HStack>
        ) : (
          <Center py={5}>
            <Text fontSize="sm" color="muted">
              {emptyStateText}
            </Text>
          </Center>
        )}
      </Box>
    </VStack>
  )

  return (
    <>
      <SurfaceCard
        p={4}
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
        <VStack align="stretch" spacing={4}>
          <Box borderRadius="18px" overflow="hidden" bg="surface">
            <AspectRatio ratio={4 / 3}>
              <NextImage
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                priority={priority}
                sizes="(max-width: 48em) 100vw, 50vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '12px'
                }}
              />
            </AspectRatio>
          </Box>

          <VStack align="stretch" spacing={3}>
            <HStack spacing={2} flexWrap="wrap">
              <Badge bg="accentMuted" color="accentStrong">
                {category}
              </Badge>
              <Badge
                borderWidth="1px"
                borderColor="line"
                color="muted"
                bg="transparent"
              >
                {client}
              </Badge>
            </HStack>

            <Text fontSize="xl" fontWeight="700" letterSpacing="-0.03em">
              {title}
            </Text>

            <Text fontSize="sm" color="muted">
              {description}
            </Text>

            <HStack spacing={3} align="center">
              <Box
                borderRadius="12px"
                overflow="hidden"
                boxSize="44px"
                bg="paper"
              >
                <NextImage
                  src={clientLogo}
                  alt={`${client} logo`}
                  width={44}
                  height={44}
                  sizes="44px"
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Text fontSize="sm" color="muted">
                Client application and brand context
              </Text>
            </HStack>

            <HStack spacing={2} flexWrap="wrap">
              {tools.map(tool => (
                <Badge
                  key={tool}
                  borderWidth="1px"
                  borderColor="line"
                  bg="transparent"
                  color="muted"
                >
                  {tool}
                </Badge>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </SurfaceCard>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay bg="rgba(23, 25, 28, 0.5)" />
        <ModalContent
          maxW={['95vw', '92vw', '86vw']}
          h={['90vh', '88vh', '86vh']}
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5} overflow="hidden">
            <VStack align="stretch" spacing={5} h="100%">
              <Text fontSize="sm" color="muted">
                {storyText || 'From concept to real-world use.'}
              </Text>

              <Tabs
                index={tabIndex}
                onChange={nextIndex => setTabIndex(nextIndex)}
                variant="line"
                display="flex"
                flexDirection="column"
                flex="1"
                minH={0}
              >
                <TabList>
                  <Tab>Design ({designImages.length})</Tab>
                  <Tab>Real-world ({realWorldImages.length})</Tab>
                </TabList>

                <TabPanels flex="1" minH={0} overflow="hidden">
                  <TabPanel p={0} pt={4} h="100%" minH={0}>
                    {renderGalleryPanel(
                      designImages,
                      'No design images added yet.',
                      'design'
                    )}
                  </TabPanel>
                  <TabPanel p={0} pt={4} h="100%" minH={0}>
                    {renderGalleryPanel(
                      realWorldImages,
                      'No real-world photos available yet.',
                      'real-world'
                    )}
                  </TabPanel>
                </TabPanels>
              </Tabs>
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
        width: 100%;
        height: auto;
        border-radius: 18px;
      }
    `}
  />
)
