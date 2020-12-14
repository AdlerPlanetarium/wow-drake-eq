import {
  Box,
  RangeInput
} from 'grommet'

const TermCard = ({
  description,
  displayName,
  estimatedMax,
  estimatedMin,
  name,
  onValueChange,
  question,
  subscript,
  value,
  valueType
}) => {
  const onChange = (event) => {
    const newValue = parseFloat(event.target.value)

    onValueChange(name, newValue)
  }

  function formatNum (num) {
    if (valueType === 'log') {
      return Math.pow(10, num)
    }
    return num
  }

  return (
    <Box
      key={name}
      align='center'
      background='white'
      height='80vh'
      justify='center'
      pad='large'
    >
      <Box
        align='center'
        background='brand'
        fill
        justify='center'
        round='large'
      >
        <p>{displayName}<sub>{subscript}</sub></p>
        <p>{formatNum(value)}</p>
        <p>{question}</p>
        <p>{description}</p>
        <RangeInput
          max={estimatedMax}
          min={estimatedMin}
          step={(valueType === 'quantity') ? 1 : 0.01}
          value={value}
          onChange={onChange}
        />
        <p>Min {formatNum(estimatedMin)}</p>
        <p>Max {formatNum(estimatedMax)}</p>
      </Box>
    </Box>
  )
}

export default TermCard
