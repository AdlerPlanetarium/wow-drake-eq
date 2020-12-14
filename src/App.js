import { useState } from 'react'
import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet'

import data from './data'
import theme from './theme'

import AreWeAlone from './components/AreWeAlone'
import DrakeEqExplain from './components/DrakeEqExplain'
import Equation from './components/Equation'
import TermCard from './components/TermCard'
import WowEnd from './components/WowEnd'

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
              <DrakeEqExplain
                size={size}
              />
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
              <WowEnd
                values={values}
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
