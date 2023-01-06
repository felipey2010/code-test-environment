import { cepMask } from '@lib/utils/masks'
import capitalizeString from '../capitalizeString'

function checkAddressFieldIsNotNull(string, suffix) {
  return string === null ? '' : suffix + string
}

function checkCepField(string) {
  return string === null ? '' : ' ' + cepMask(string)
}

function formatAddresse(place) {
  const {
    address,
    address_neighbourhood,
    address_number,
    address_city,
    address_uf,
    address_zip_code
  } = place

  const streat = address
  const number = checkAddressFieldIsNotNull(address_number, ', ')
  const neighbourhood = checkAddressFieldIsNotNull(address_neighbourhood, ' - ')
  const city = checkAddressFieldIsNotNull(address_city, ' - ')
  const state = checkAddressFieldIsNotNull(address_uf, ', ')
  const cep = checkCepField(address_zip_code)

  //  const streat = address
  //  const number = checkStringIfIsNull(address_number, ' - ')
  //  const neighbourhood = checkStringIfIsNull(address_neighbourhood, ', ')
  //  const city = checkStringIfIsNull(address_city, ' - ')
  //  const state = checkStringIfIsNull(address_uf, ', ')
  //  const cep = checkStringIfIsNull(address_zip_code, '')

  let formattedAddress = `${streat}${number}${neighbourhood}${city}${state}${cep}`

  return capitalizeString(formattedAddress)
}

export default formatAddresse
