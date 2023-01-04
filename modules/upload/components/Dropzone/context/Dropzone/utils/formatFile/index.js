export default function formatFile(file) {
  const fileUrl = URL.createObjectURL(file)

  const { name, size } = file

  const splitedFilename = file.name.split('.')
  const extension = splitedFilename[splitedFilename.length - 1]

  const formatedFile = {
    file,
    name,
    url: fileUrl,
    size,
    extension
  }

  return formatedFile
}
