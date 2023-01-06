export default function deleteLocalStorage(key) {
  localStorage.removeItem(key)

  return true
}
