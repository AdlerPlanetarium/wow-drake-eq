import {
  Box
} from 'grommet'

import data from '../data'
import getResult from '../helpers/getResult'

function Equation ({ values }) {
  const result = getResult(values)

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
