import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  DrawerBody,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerCloseButton,
  Box,
  Text,
  Heading
} from '@chakra-ui/react'

import FileForm from '@integrated-profile/views/files/components/Form'
import formValidator from '@integrated-profile/views/files/utils/formValidator'
import { useFilesPageManager } from '@integrated-profile/views/files/contexts/FilesPageManager/Provider'

export default function UpdateFileForm({ isOpen, onClose, file }) {
  const { updateFile } = useFilesPageManager()

  const [loadingButton, setLoadingButton] = useState(false)

  const {
    reset,
    handleSubmit,
    register,
    watch,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(formValidator),
    defaultValues: file
  })

  async function onSubmit(values) {
    setLoadingButton(true)

    await updateFile(values, file.id)

    setLoadingButton(false)
  }

  return (
    <Drawer blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize="sm">Editando:</Text>
            <Heading size="md" color="primary">
              {file.name}
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <FileForm
              watch={watch}
              setValue={setValue}
              register={register}
              errors={errors}
              reset={reset}
            />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button isLoading={loadingButton} type="submit">
              Atualizar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Box>
    </Drawer>
  )
}
