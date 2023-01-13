import { memo } from 'react'
import { IconButton, Button, useDisclosure } from '@chakra-ui/react'

import { AiOutlineDelete } from 'react-icons/ai'

import ConfirmDeleteModal from './components/ConfirmDeleteModal'

function DeleteButton({
  children,
  onDelete,
  colorScheme = 'gray',
  color = 'dark',
  title = 'Are you sure of this action?',
  text,
  description = 'This action is irreversible',
  cancelButtonText = 'Cancel',
  submitButtonText = "Yes, I'm sure",
  buttonType = children ? 'button' : 'icon',
  variant = 'ghost',
  modalLogic = true,
  ...rest
}) {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const shouldOpenModal = () => {
    if (modalLogic) onOpen()
  }

  const IconButtonType = () => {
    return (
      <IconButton
        colorScheme={colorScheme}
        variant={variant}
        icon={<AiOutlineDelete color={color} />}
        onClick={shouldOpenModal}
        {...rest}
      />
    )
  }

  const ButtonType = () => {
    return (
      <Button
        variant={variant}
        colorScheme={colorScheme}
        leftIcon={<TrashDeleteBin color={color} />}
        onClick={shouldOpenModal}
        {...rest}
      >
        {children}
      </Button>
    )
  }

  const selectedButtonType = {
    icon: <IconButtonType />,
    button: <ButtonType />
  }

  const confirmModalProps = {
    isOpen,
    onClose,
    onDelete,
    title,
    text,
    description,
    cancelButtonText,
    submitButtonText
  }

  return (
    <>
      {selectedButtonType[buttonType]}

      <ConfirmDeleteModal {...confirmModalProps} />
    </>
  )
}

export default memo(DeleteButton)
