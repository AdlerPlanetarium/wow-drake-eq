import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet'

const theme = {
  global: {
    colors: {
      brand: '#ffce34',
      darkGray: '#474c55',
      lightGray: '#ddddda',
      white: '#ffffff'
    },
    font: {
      family: 'Montserrat',
      size: '18px',
      height: '20px'
    }
  }
}

function App () {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Box flex='grow'>
              <Box
                align='center'
                background='brand'
                height='100vh'
                justify='center'
              >
                <p>
                  COMING SOON
                </p>
                <p>
                  Wow! Signal: Drake Equation
                </p>
                <p>
                  COMING SOON
                </p>
              </Box>
              <Box
                align='center'
                background='darkGray'
                height='100vh'
                justify='center'
              >
                <p>Second section</p>
                <p>Size = {size}</p>
              </Box>
              <Box
                align='center'
                background='white'
                height='100vh'
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
                  <p>Box in box</p>
                </Box>
              </Box>
              <Box
                align='center'
                background='brand'
                height='100vh'
                justify='center'
              >
                <p>Last section</p>
                <p>Bye!</p>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
