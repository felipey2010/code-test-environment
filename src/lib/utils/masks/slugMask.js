export default function slugMask(value = '') {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      //.replace(/[0-9]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
  )
}
