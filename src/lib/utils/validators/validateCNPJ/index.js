export default function validadeCNPJ(cnpj = '') {
  cnpj = cnpj.replace(/\./g, '')
  cnpj = cnpj.replace('-', '')
  cnpj = cnpj.replace('/', '')

  const cnpjSplited = cnpj.split('')

  let v1 = 0
  let v2 = 0
  let aux = false

  for (let i = 1; cnpjSplited.length > i; i++) {
    if (cnpjSplited[i - 1] !== cnpjSplited[i]) {
      aux = true
    }
  }

  if (aux === false) {
    return false
  }

  for (
    let index = 0, p1 = 5, p2 = 13;
    cnpjSplited.length - 2 > index;
    index++, p1--, p2--
  ) {
    if (p1 >= 2) {
      v1 += Number(cnpjSplited[index]) * p1
    } else {
      v1 += Number(cnpjSplited[index]) * p2
    }
  }

  v1 = v1 % 11

  if (v1 < 2) {
    v1 = 0
  } else {
    v1 = 11 - v1
  }

  if (v1 !== Number(cnpjSplited[12])) {
    return false
  }

  for (
    let index = 0, p1 = 6, p2 = 14;
    cnpjSplited.length - 1 > index;
    index++, p1--, p2--
  ) {
    if (p1 >= 2) {
      v2 += Number(cnpjSplited[index]) * p1
    } else {
      v2 += Number(cnpjSplited[index]) * p2
    }
  }

  v2 = v2 % 11

  if (v2 < 2) {
    v2 = 0
  } else {
    v2 = 11 - v2
  }

  if (v2 !== Number(cnpjSplited[13])) {
    return false
  } else {
    return true
  }
}
