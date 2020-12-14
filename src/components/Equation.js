import {
  Box
} from 'grommet'

function Equation () {
  return (
    <Box
      align='center'
      background='lightGray'
      height='20vh'
      justify='center'
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: 1
      }}
    >
      <p>1 + 2 + 3 + 4 + 5 + 6 + 7 = 28</p>
    </Box>
  )
}

export default Equation
