export default function decodeURI(value) {
  if (value) {
    const newURI = value.replace('+', '%2B')

    return newURI
  }

  return undefined
}
