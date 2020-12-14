import { useState } from 'react'
import {
  Box,
  RangeInput
} from 'grommet'

const TermCard = ({
  defaultValue,
  description,
  displayName,
  estimatedMax,
  estimatedMin,
  name,
  question,
  subscript,
  valueType
}) => {
  const [value, setValue] = useState((valueType === 'percentage') ? (defaultValue * 100) : defaultValue)

  const onChange = event => setValue(event.target.value)

  let num

  if (valueType === 'log') {
    num = Math.pow(10, value)
  }

  if (valueType === 'percentage') {
    num = 100 * value
  }

  const formatNum = Math.round(num) + (valueType === 'percentage' ? '%' : '')

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
        <p>{formatNum}</p>
        <p>{question}</p>
        <p>{description}</p>
        <RangeInput
          max={(valueType === 'percentage') ? (estimatedMax * 100) : estimatedMax}
          min={(valueType === 'percentage') ? (estimatedMin * 100) : estimatedMin}
          step={(valueType === 'quantity') ? '1' : '0.01'}
          value={value}
          onChange={onChange}
        />
      </Box>
    </Box>
  )
}

export default TermCard
