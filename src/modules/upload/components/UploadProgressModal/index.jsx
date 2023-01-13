import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  ScaleFade,
  Text
} from '@chakra-ui/react'
import { Loader } from '@lib/components'
import Success from './components/Success'
import { usePageManager } from '@upload/contexts/PageManager/Provider'

export default function UploadProgressModal() {
  const { progress, isOpen, onClose } = usePageManager()

  return (
    <ScaleFade initialScale={0.5} in={isOpen}>
      <Modal blockScrollOnMount="true" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Progress</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={2}>
              {progress < 100 ? (
                <Loader text="Uploading..." h="100px" />
              ) : (
                <Success />
              )}

              <Flex w="100%" alignItems="center" gap={1}>
                <Progress
                  value={progress}
                  colorScheme="green"
                  size="md"
                  hasStripe
                  w="100%"
                />
                <Text minW="40px">{progress > 100 ? '100' : progress}%</Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ScaleFade>
  )
}
