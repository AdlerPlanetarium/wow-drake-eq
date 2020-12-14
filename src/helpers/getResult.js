function getResult (values) {
  let result = 1
  values.forEach((value, key) => {
    if (key === 'L') {
      result *= Math.pow(10, value)
    } else {
      result *= value
    }
  })
  return result
}

export default getResult
