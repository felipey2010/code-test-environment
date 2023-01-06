import { memo, useMemo } from 'react'
import { Select } from '@chakra-ui/react'

function LimitSelect({ limit, onChangeLimit }) {
  const pageLimitsOptions = useMemo(() => {
    return [
      { value: 10, label: '10 / página' },
      { value: 20, label: '20 / página' },
      { value: 50, label: '50 / página' },
      { value: 100, label: '100 / página' }
    ]
  }, [])
  return (
    <Select
      minW="max-content"
      maxW="max-content"
      aria-label="Opções de limit de paginação."
      onChange={({ target }) => onChangeLimit(target.value)}
      defaultValue={limit}
      align="center"
      gap={1}
    >
      {pageLimitsOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  )
}

export default memo(LimitSelect)
