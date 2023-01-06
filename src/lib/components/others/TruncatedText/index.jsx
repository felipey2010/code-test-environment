import { memo } from 'react'
import { Tooltip, Text } from '@chakra-ui/react'

function TruncatedText({ children, maxTexts = 75, ...rest }) {
  if (!children) {
    return <Text {...rest}>{text}</Text>
  }

  const isTextLarger = children.length > maxTexts

  const text = isTextLarger ? `${children.substring(0, maxTexts)}...` : children

  return (
    <Tooltip
      color="light"
      label={children.substring(maxTexts, children.length)}
      {...rest}
    >
      <Text {...rest}>{text}</Text>
    </Tooltip>
  )
}

export default memo(TruncatedText)
