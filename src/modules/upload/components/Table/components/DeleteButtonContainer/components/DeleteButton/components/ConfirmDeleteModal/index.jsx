import { memo, useState } from 'react'
import {
  Box,
  Button,
  Icon,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Stack
} from '@chakra-ui/react'

import { AiOutlineDelete } from 'react-icons/ai'

function DeleteButton({
  isOpen,
  onClose,
  onDelete,
  title = 'Are you sure of this action?',
  text,
  description = 'This action is irreversible',
  cancelButtonText = 'Cancel',
  submitButtonText = "Yes, I'm sure"
}) {
  const [loadingButton, setLoadingButton] = useState(false)

  async function handleDeleteAction() {
    setLoadingButton(true)
    const response = await onDelete()

    if (response?.success) {
      onClose()
      setLoadingButton(false)
    }

    setLoadingButton(false)
  }

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Stack direction="column" align="center">
            <Icon color="danger" as={AiOutlineDelete} boxSize="16" />
            <Heading size="md">{title}</Heading>

            <Box textAlign="center">
              {text && <Text textAlign="center">{text}</Text>}
              <Text color="danger">{description}</Text>
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} colorScheme="gray" onClick={onClose}>
            {cancelButtonText}
          </Button>
          <Button
            onClick={handleDeleteAction}
            isLoading={loadingButton}
            variant="solid"
            colorScheme="red"
          >
            {submitButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default memo(DeleteButton)
