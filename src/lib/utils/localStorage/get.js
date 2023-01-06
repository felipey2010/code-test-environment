export default function getLocalStorage(key) {
  if (!key) return false

  return localStorage.getItem(key)
}
