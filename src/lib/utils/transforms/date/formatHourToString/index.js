import { format } from 'date-fns'

export default function formatHourToString(date) {
  return format(new Date(date), 'HH:mm')
}
