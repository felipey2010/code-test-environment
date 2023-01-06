import { memo, useMemo, Fragment } from 'react'
import { Flex } from '@chakra-ui/react'

import { PaginationDescription } from 'lib/components'
import usePagination from './hooks/usePagination'
import LimitSelect from './components/LimitSelect'
import PageItems from './components/PageItems'
import PageShortCut from './components/PageShortCut'

function Pagination({
  currentPage = 1,
  limit = 10,
  totalItems,
  onChangePage,
  onChangeLimitAndPage,
  showDescription = true,
  descriptionLabel,
  hasShortCut = true,
  ...rest
}) {
  const maxPages = useMemo(() => {
    return Math.ceil(totalItems / limit)
  }, [totalItems, limit])

  const { choosePages } = usePagination({
    currentPage: Number(currentPage),
    limit: Number(limit),
    maxPages,
    totalItems
  })

  return (
    <Fragment>
      {totalItems > 0 && (
        <Flex
          p={4}
          flexWrap="wrap"
          justify={showDescription ? 'space-between' : 'center'}
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={2}
          {...rest}
        >
          <Fragment>
            {showDescription && (
              <PaginationDescription
                limit={limit}
                page={currentPage}
                totalItems={totalItems}
                label={descriptionLabel}
              />
            )}

            <Flex align="center" gap={2}>
              <PageItems
                currentPage={currentPage}
                choosePages={choosePages}
                onChangePage={onChangePage}
              />
              {onChangeLimitAndPage && (
                <LimitSelect
                  limit={limit}
                  onChangeLimit={(newLimit) => {
                    onChangeLimitAndPage({ limit: Number(newLimit), page: 1 })
                  }}
                />
              )}
              {hasShortCut && (
                <PageShortCut
                  totalItems={totalItems}
                  limit={limit}
                  onChangePage={onChangePage}
                />
              )}
            </Flex>
          </Fragment>
        </Flex>
      )}
    </Fragment>
  )
}

export default memo(Pagination)
