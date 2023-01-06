import { Fragment, memo } from 'react'
import { Button } from '@chakra-ui/react'

import { numberWithPunctuation } from 'lib/utils/transforms/number'

const PageItems = ({ currentPage, choosePages, onChangePage }) => {
  return (
    <Fragment>
      {choosePages.map(({ label, value }) => {
        const isCurrentPage = value === currentPage

        return (
          <Button
            minWidth="min-content"
            onClick={() => onChangePage(value)}
            key={value}
            color={isCurrentPage ? 'light' : 'primary'}
            bg={isCurrentPage ? 'primary' : 'light'}
            borderWidth="1px"
            borderColor="primary"
            _hover={{ color: 'light', bg: 'primary' }}
          >
            {isNaN(label) ? label : numberWithPunctuation(label)}
          </Button>
        )
      })}
    </Fragment>
  )
}

export default memo(PageItems)
