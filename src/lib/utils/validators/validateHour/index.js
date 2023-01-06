export default function validateHour(date) {
  if (date.length !== 5) return false

  const split = date.split(':').map((value) => Number(value))

  if (split[0] > 24) return false
  if (split[1] > 60) return false

  return true
}
