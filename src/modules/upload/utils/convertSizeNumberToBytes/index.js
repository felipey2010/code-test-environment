function chooseBetterFormatForBytes(bytes) {
  if (bytes > 1024 * 1024 * 1024) {
    return 'GB'
  } else if (bytes > 1024 * 1024) {
    return 'MB'
  } else if (bytes > 1024) {
    return 'KB'
  }

  return 'B'
}
export default function convertSizeNumberToBytes(bytes, returnBy) {
  const betterFormat = returnBy || chooseBetterFormatForBytes(bytes)

  const possibleFormats = {
    B: bytes,
    KB: bytes / 1024,
    MB: bytes / 1024 / 1024,
    GB: bytes / 1024 / 1024 / 1024
  }
  const formatedBytes = possibleFormats[betterFormat]

  return `${formatedBytes.toFixed(2)} ${betterFormat}`
}
