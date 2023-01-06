/**
 * Format the string according to the max length passed to the function
 */
export default function getformattedName(
  string = '',
  defaultReturned = '-',
  maxLength
) {
  if (!string) return defaultReturned

  return string.length > maxLength
    ? string.split('', maxLength).join('') + '...'
    : string
}
