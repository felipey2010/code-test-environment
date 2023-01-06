export default function cnhMask(value = '') {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d{4})(\d{4})(\d{2})+?$/, '$1 $2 $3 $4')
}
