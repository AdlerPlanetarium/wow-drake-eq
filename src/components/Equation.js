import {
  Box
} from 'grommet'

import data from '../data'

function Equation ({ values }) {
  let result = 1
  values.forEach((value, key) => {
    if (key === 'L') {
      result *= Math.pow(10, value)
    } else {
      result *= value
    }
  })

  return (
    <Box
      align='center'
      background='lightGray'
      direction='row'
      height='20vh'
      justify='center'
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: 1
      }}
    >
      {Object.values(data).map(term => (
        <p
          key={term.name}
        >
          <span>{term.name} = </span>
          <span>{values.get(term.name)}</span>
          <span>__</span>
        </p>
      ))}
      <span>***</span>
      <p>Result = {Math.round(result)}</p>
    </Box>
  )
}

export default Equation
