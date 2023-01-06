export default function getformattedStringInPhrase(
  string = '',
  defaultReturned = '-'
) {
  if (!string) return defaultReturned

  const slicedLowerCaseString = string.slice(1, string.length).toLowerCase()

  return string[0].toUpperCase() + slicedLowerCaseString
}
