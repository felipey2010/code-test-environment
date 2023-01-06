export default function validateDate(date) {
  if (date.length !== 10) return false

  const split = date.split('/').map((value) => Number(value))

  if (split[0] > 31) return false
  if (split[1] > 12) return false
  if (split[2] < 1800 || split[2] > 2100) return false

  return true
}
