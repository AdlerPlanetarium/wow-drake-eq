import { useState } from 'react'
import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet'

import data from './data'
import theme from './theme'

import AreWeAlone from './components/AreWeAlone'
import Equation from './components/Equation'
import TermCard from './components/TermCard'

const App = () => {
  const defaultValuesMap = new Map([
    ['rstar', data.rstar.defaultValue],
    ['fp', data.fp.defaultValue],
    ['ne', data.ne.defaultValue],
    ['fl', data.fl.defaultValue],
    ['fi', data.fi.defaultValue],
    ['fc', data.fc.defaultValue],
    ['L', data.L.defaultValue]
  ])

  const [values, setValues] = useState(defaultValuesMap)

  const onValueChange = (name, value) => {
    const newValues = new Map(values)
    newValues.set(name, value)
    setValues(newValues)
  }

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Box flex='grow'>
              <AreWeAlone />
              <Box
                align='center'
                background='darkGray'
                height='80vh'
                justify='center'
              >
                <p>Second section</p>
                <p>Size = {size}</p>
              </Box>
              <Equation
                values={values}
              />
              {Object.values(data).map(term => (
                <TermCard
                  key={term.name}
                  onValueChange={onValueChange}
                  value={values.get(term.name)}
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
