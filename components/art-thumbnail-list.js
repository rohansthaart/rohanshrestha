import { useState } from 'react'
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'

const ArtThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState(null)
  const modalBg = useColorModeValue('white', 'gray.800')
  const itemBorderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const itemShadow = useColorModeValue('card', 'cardDark')
  const itemHoverShadow = useColorModeValue('cardHover', 'cardHoverDark')

  const openPreview = (src) => {
    setSelectedImage(src)
    onOpen()
  }

  return (
    <>
      <SimpleGrid columns={[2, 3, 4]} gap={5}>
        {Array.from(Array(numOfImages).keys())
          .map(i => i + 1)
          .map(i => {
            const imageSrc = urlForImage(i)

            return (
              <Box
                key={i}
                cursor="zoom-in"
                borderRadius="lg"
                overflow="hidden"
                borderWidth="1px"
                borderColor={itemBorderColor}
                boxShadow={itemShadow}
                transition="all 0.2s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: itemHoverShadow
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
                <Image src={imageSrc} alt={`${alt} ${i}`} w="100%" />
              </Box>
            )
          })}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
        <ModalOverlay />
        <ModalContent bg={modalBg}>
          <ModalHeader>{alt} preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt={`${alt} expanded preview`}
                w="100%"
                borderRadius="lg"
              />
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ArtThumbnailList