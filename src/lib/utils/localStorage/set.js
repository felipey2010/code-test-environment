export default function setLocalStorage({ key, value }) {
  if (!key || !value) return false

  localStorage.setItem(key, value)

  return true
}
