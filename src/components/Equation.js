import {
  Button,
  Box,
  Text
} from 'grommet'
import styled from 'styled-components'

import data from '../data'
import formatNumber from '../helpers/formatNumber'
import getResult from '../helpers/getResult'

const StyledButton = styled(Button)`
  border-radius: 10px;
`

const StyledItalicText = styled(Text)`
  font-style: italic;
`

function Equation ({
  activeTerm,
  setActiveTerm,
  size,
  values
}) {
  const result = getResult(values)

  return (
    <Box
      align='center'
      background='lightGray'
      direction='row'
      fill='horizontal'
      height='20vh'
      justify='center'
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: 1
      }}
      wrap
    >
      <StyledItalicText
        color='darkGray'
        margin={{ right: 'small' }}
        weight='bold'
      >
        alieNs =
      </StyledItalicText>
      {Object.values(data).map(term => (
        <Box
          key={term.name}
          align='center'
          direction='column'
          margin='small'
        >
          <StyledButton
            href={`#${term.name}`}
            color={(activeTerm === term.name) ? 'brand' : 'darkGray'}
            onClick={() => setActiveTerm(term.name)}
            primary
            label={
              <StyledItalicText
                color='white'
                weight='bold'
              >
                {term.displayName}
                <sub>
                  {term.subscript}
                </sub>
              </StyledItalicText>
            }
          />
          {(size !== 'small') &&
            <Text
              weight='bold'
            >
              {formatNumber(term.valueType, values.get(term.name))}
            </Text>}
        </Box>
      ))}
      <StyledItalicText
        color='darkGray'
        margin={{ left: 'small' }}
        weight='bold'
      >
        = {Math.round(result).toLocaleString()}
      </StyledItalicText>
    </Box>
  )
}

export default Equation
