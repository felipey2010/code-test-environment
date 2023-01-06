export default function removeEverythingThatIsNotNumber(value) {
  if (!value) return undefined

  return value.replace(/[^\d]+/g, '')
}
