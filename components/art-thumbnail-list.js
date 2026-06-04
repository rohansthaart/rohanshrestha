import { useState } from 'react'
import NextImage from 'next/image'
import {
  AspectRatio,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure
} from '@chakra-ui/react'

const ArtThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState(null)

  const openPreview = src => {
    setSelectedImage(src)
    onOpen()
  }

  return (
    <>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={5}>
        {Array.from(Array(numOfImages).keys())
          .map(i => i + 1)
          .map(i => {
            const imageSrc = urlForImage(i)

            return (
              <Box
                key={i}
                cursor="zoom-in"
                borderRadius="20px"
                overflow="hidden"
                borderWidth="1px"
                borderColor="line"
                boxShadow="card"
                transition="transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms cubic-bezier(0.23, 1, 0.32, 1)"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lift'
                }}
                role="button"
                tabIndex={0}
                onClick={() => openPreview(imageSrc)}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openPreview(imageSrc)
                  }
                }}
              >
                <AspectRatio ratio={3 / 4} bg="surface">
                  <Box position="relative" w="100%" h="100%">
                    <NextImage
                      src={imageSrc}
                      alt={`${alt} ${i}`}
                      fill
                      sizes="(max-width: 48em) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </AspectRatio>
              </Box>
            )
          })}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
        <ModalOverlay bg="rgba(23, 25, 28, 0.38)" />
        <ModalContent>
          <ModalHeader>{alt} preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedImage ? (
              <>
                <Box
                  position="relative"
                  w="100%"
                  minH={{ base: '50vh', md: '70vh' }}
                  borderRadius="20px"
                  overflow="hidden"
                  bg="surface"
                >
                  <NextImage
                    src={selectedImage}
                    alt={`${alt} expanded preview`}
                    fill
                    sizes="(max-width: 48em) 92vw, 74vw"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Text color="muted" fontSize="sm" mt={3}>
                  Expanded view from the {alt.toLowerCase()} collection.
                </Text>
              </>
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ArtThumbnailList
