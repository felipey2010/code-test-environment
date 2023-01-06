export default function cnsMask(value = '') {
  if (!value) return ''

  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(.\d{4})\d+?$/, '$1')
}
