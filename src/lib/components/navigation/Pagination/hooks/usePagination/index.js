import { useState, useEffect } from 'react'

import setBeginnerPageItems from './setBeginnerPageItems'
import setMiddlePageItems from './setMiddlePageItems'
import setLastPageItems from './setLastPageItems'

const usePagination = ({ totalItems, limit, currentPage }) => {
  const [choosePages, setPages] = useState([])

  const isMobile = window.innerWidth < 600

  useEffect(() => {
    function chooseBeginnerPageItems(maxPages = 0) {
      const pagesQuantity = maxPages < 7 ? maxPages : 7

      let pages = setBeginnerPageItems(pagesQuantity, maxPages)

      if (isMobile) pages.splice(5, 2)

      return pages
    }

    function chooseMiddlePageItems(maxPages) {
      let pages = []

      pages = setMiddlePageItems(pages, currentPage, maxPages)

      if (isMobile) {
        pages.splice(0, 1)
        pages.splice(5, 1)
      }

      return pages
    }

    function chooseLastPageItems(maxPages) {
      let pages = []

      pages = setLastPageItems(pages, maxPages)

      if (isMobile) pages.splice(2, 2)

      return pages
    }

    function TreatedPageItemsInArray() {
      const maxPages = Math.ceil(totalItems / limit)

      const middlePageNeighbor = 3

      let currentPages = []

      if (maxPages <= 4 || currentPage < 4) {
        currentPages = chooseBeginnerPageItems(maxPages)
      } else if (currentPage < maxPages - middlePageNeighbor) {
        currentPages = chooseMiddlePageItems(maxPages)
      } else {
        currentPages = chooseLastPageItems(maxPages)
      }

      setPages(currentPages)
    }

    TreatedPageItemsInArray()
  }, [isMobile, currentPage, limit, totalItems])

  return { choosePages }
}

export default usePagination
