const deepClone = data => {
  JSON.parse(JSON.stringify(data))
}

export {
  deepClone,
}