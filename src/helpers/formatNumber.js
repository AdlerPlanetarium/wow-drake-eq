function formatNumber (type, number) {
  if (type === 'log') {
    return Math.round(Math.pow(10, number)).toLocaleString()
  }

  if (type === 'percentage') {
    return `${Math.round(number * 100)}%`
  }

  return number.toLocaleString()
}

export default formatNumber
