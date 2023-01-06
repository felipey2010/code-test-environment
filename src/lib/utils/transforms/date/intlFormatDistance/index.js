import { intlFormatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function customIntlFormatDistance(date, baseDate, options) {
  return intlFormatDistance(new Date(date), new Date(baseDate || Date.now()), {
    locale: ptBR,
    addSuffix: true,
    ...options
  })
}
