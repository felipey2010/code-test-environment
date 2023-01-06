export default function setBegginPageItems(pagesQuantity, maxPages) {
  const array = Array.from({ length: pagesQuantity }, (item, index) => {
    const value = index + 1

    return {
      label: value,
      value
    }
  })

  array.pop()

  array.push({ label: maxPages, value: maxPages })

  return array
}
