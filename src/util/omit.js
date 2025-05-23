const omit = (obj, ...keys) => {
  const res = {}
  for (const k of Object.keys(obj)) {
    if (!keys.includes(k)) {
      res[k] = obj[k]
    }
  }
  return res
}

export default omit
