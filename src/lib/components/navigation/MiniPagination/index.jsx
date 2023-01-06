import { memo, useMemo, Fragment } from 'react'
import { Flex } from '@chakra-ui/react'

import PageItems from './components/PageItems'
import PageShortCut from './components/PageShortCut'

function MiniPagination({
  currentPage = 1,
  limit = 10,
  totalItems,
  onChangePage
}) {
  const maxPages = useMemo(() => {
    return Math.ceil(totalItems / limit)
  }, [totalItems, limit])

  return (
    <Fragment>
      {totalItems > 0 && (
        <Flex
          p={2}
          justify="center"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex gap={2}>
            <PageItems
              maxPages={maxPages}
              currentPage={currentPage}
              onChangePage={onChangePage}
            />
            <PageShortCut
              limit={limit}
              totalItems={totalItems}
              onChangePage={onChangePage}
            />
          </Flex>
        </Flex>
      )}
    </Fragment>
  )
}

export default memo(MiniPagination)
