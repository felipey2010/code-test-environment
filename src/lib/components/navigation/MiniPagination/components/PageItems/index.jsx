import { memo } from 'react'
import { IconButton, Flex, Text } from '@chakra-ui/react'

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const ArrowButton = ({ Icon, iconSize, isDisabled, ...rest }) => {
  return (
    <IconButton
      isDisabled={isDisabled}
      variant="ghost"
      icon={<Icon boxSize={iconSize} />}
      rounded="full"
      _hover={!isDisabled && { bg: 'primary', color: 'light' }}
      {...rest}
    />
  )
}

const PageItems = ({ currentPage, onChangePage, maxPages }) => {
  const { format } = new Intl.NumberFormat('pt-BR')

  const iconSize = 8
  const textSize = 'md'

  return (
    <Flex align="center" gap={4}>
      <ArrowButton
        Icon={BiLeftArrow}
        iconSize={iconSize}
        isDisabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
        aria-label={
          currentPage === 1
            ? 'Bloqueado por que está na 1° página'
            : `Voltar para a página ${currentPage - 1}`
        }
      />

      <Text fontSize={textSize}>{format(currentPage)}</Text>
      <Text fontSize={textSize}>/</Text>
      <Text fontSize={textSize}>{format(maxPages)}</Text>

      <ArrowButton
        aria-label={
          maxPages <= currentPage
            ? 'Bloqueado por que está na ultima página'
            : `Ir para a página ${currentPage + 1}`
        }
        Icon={BiRightArrow}
        iconSize={iconSize}
        isDisabled={maxPages <= currentPage}
        onClick={() => onChangePage(currentPage + 1)}
      />
    </Flex>
  )
}

export default memo(PageItems)
