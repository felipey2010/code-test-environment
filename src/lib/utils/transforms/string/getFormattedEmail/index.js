export default function getformattedEmail(
  string = '',
  defaultReturned = '-',
  maxLength
) {
  if (!string) return defaultReturned

  const textArray = string.split('@')

  let firstPart =
    textArray[0].length > maxLength
      ? textArray[0].split('', maxLength).join('') + '...'
      : textArray[0]

  return firstPart + '@' + textArray[1]
}
