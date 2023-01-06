import { memo, useRef, useCallback, useMemo } from 'react'
import { Input, FormControl, FormLabel, Flex } from '@chakra-ui/react'

import useHotKeyPressed from 'hooks/useHotKeyPressed'

function Pagination({
  id = 'pagination-shortcut',
  limit = 10,
  totalItems,
  onChangePage
}) {
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
    <FormControl>
      <Flex align="center" gap={1}>
        <FormLabel htmlFor={id} m={0}>
          Ir para:{' '}
        </FormLabel>

        <Input id={id} ref={inputRef} p={2} w="50px" />
      </Flex>
    </FormControl>
  )
}

export default memo(Pagination)
