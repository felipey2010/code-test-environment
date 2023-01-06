import { memo, useRef, useCallback, useMemo } from 'react'
import { Input, FormLabel, Flex } from '@chakra-ui/react'

import useHotKeyPressed from 'hooks/useHotKeyPressed'

function Pagination({ limit, totalItems, onChangePage }) {
  const inputRef = useRef()

  const maxPages = useMemo(() => {
    return Math.ceil(totalItems / limit)
  }, [totalItems, limit])

  useHotKeyPressed('Enter', () => {
    if (inputRef?.current?.value) {
      goToPage(inputRef.current.value)
    }
  })

  const goToPage = useCallback(
    (page) => {
      const pageExist = page * limit < totalItems

      let newPage = pageExist ? Number(page) : maxPages

      if (page < 0) newPage = 1

      onChangePage(Number(newPage || 1))
    },
    [totalItems, limit]
  )

  return (
    <Flex align="center" gap={1} minW="max-content">
      <FormLabel m={0}>Ir para: </FormLabel>
      <Input ref={inputRef} p={2} w="50px" />
    </Flex>
  )
}

export default memo(Pagination)
