export default function capitalizeString(string = '') {
  if (!string) return '-'

  const arrayOfString = string.toLowerCase().split(' ')

  const newFormatedArrayOfString = []

  arrayOfString.forEach((string) => {
    let word = ''

    if (string.length <= 2) {
      word = string.charAt(0) + string.slice(1)
    } else {
      word = string.charAt(0).toUpperCase() + string.slice(1)
    }

    newFormatedArrayOfString.push(word)
  })

  return newFormatedArrayOfString.join(' ')
}
