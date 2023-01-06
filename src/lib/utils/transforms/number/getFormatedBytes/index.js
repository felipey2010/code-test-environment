function chooseBetterFormatForBytes(bytes) {
  if (bytes > 1000 * 1000 * 1000) {
    return 'GB'
  } else if (bytes > 1000 * 1000) {
    return 'MB'
  }

  return 'KB'
}
export default function getFormatedBytes(bytes, returnBy) {
  const betterFormat = returnBy || chooseBetterFormatForBytes(bytes)

  const possibleFormats = {
    KB: bytes / 1000,
    MB: bytes / 1000 / 1000,
    GB: bytes / 1000 / 1000 / 1000
  }
  const formatedBytes = possibleFormats[betterFormat]

  return `${formatedBytes.toFixed(2)} ${betterFormat}`
}
