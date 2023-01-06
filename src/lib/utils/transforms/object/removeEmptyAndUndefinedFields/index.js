function removeEmptyAndUndefinedFields(object) {
  if (!object) return []

  let newObject = {}

  for (let key in object) {
    if (
      object[key] !== undefined &&
      object[key] !== null &&
      object[key] !== ''
    ) {
      newObject[key] = object[key]
    }
  }

  return newObject
}

export default removeEmptyAndUndefinedFields
