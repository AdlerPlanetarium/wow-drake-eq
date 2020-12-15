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
      direction='row-responsive'
      fill='horizontal'
      height='20vh'
      pad={{
        horizontal: 'large',
        vertical: 'small'
      }}
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: 1
      }}
      wrap={(size === 'small')}
    >
      <StyledItalicText
        color='darkGray'
        margin={{ right: 'medium' }}
        weight='bold'
      >
        alieNs =
      </StyledItalicText>
      <Box
        align='center'
        flex
        direction='row'
        justify={(size === 'small') ? 'center' : 'between'}
        wrap={(size === 'small')}
      >
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
      </Box>
      <StyledItalicText
        alignSelf={(size === 'small') ? 'end' : 'center'}
        color='darkGray'
        margin={{ left: 'medium' }}
        weight='bold'
      >
         = {Math.round(result).toLocaleString()}
      </StyledItalicText>
    </Box>
  )
}

export default Equation
