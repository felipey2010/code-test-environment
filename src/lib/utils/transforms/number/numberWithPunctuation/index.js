export default function numberWithPunctuation(value) {
  var n = '' + value,
    t = n.length - 1,
    novo = ''

  for (var i = t, a = 1; i >= 0; i--, a++) {
    var ponto = a % 3 == 0 && i > 0 ? '.' : ''
    novo = ponto + n.charAt(i) + novo
  }
  return novo
}
