import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function distanceToNow(date) {
  return formatDistanceToNowStrict(new Date(date), {
    locale: ptBR
  })
}
