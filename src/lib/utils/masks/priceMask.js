export default function priceMask(value = '') {
  return value.replace(/\D/g, '').replace(/(\d+)(\d{2})/, '$1.$2')
}
