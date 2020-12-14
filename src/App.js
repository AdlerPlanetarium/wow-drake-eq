import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet'

import data from './data'
import theme from './theme'

import Equation from './components/Equation'
import TermCard from './components/TermCard'

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
                height='80vh'
                justify='center'
              >
                <p>Second section</p>
                <p>Size = {size}</p>
              </Box>
              <Equation />
              {Object.values(data).map(term => (
                <TermCard
                  key={term.name}
                  {...term}
                />
              ))}
              <Box
                align='center'
                background='brand'
                height='80vh'
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
