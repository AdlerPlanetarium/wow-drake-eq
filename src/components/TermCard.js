import {
  Box,
  Heading,
  RangeInput,
  Text
} from 'grommet'
import styled from 'styled-components'

import formatNumber from '../helpers/formatNumber'

const StyledHeading = styled(Heading)`
  font-style: italic;
`

const StyledQuestionText = styled(Text)`
  font-style: italic;
`

const StyledDescriptionText = styled(Text)`
  font-style: italic;
`

function TermCard ({
  description,
  displayName,
  estimatedMax,
  estimatedMin,
  name,
  onValueChange,
  question,
  subscript,
  value,
  valueType
}) {
  const onChange = (event) => {
    const newValue = parseFloat(event.target.value)

    onValueChange(name, newValue)
  }

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
        background='brand'
        fill
        round='large'
        pad='large'
      >
        <StyledHeading
          color='darkGray'
          level={2}
          margin='none'
          size='large'
        >
          {displayName}
          <sub>
            {subscript}
          </sub>
        </StyledHeading>
        <StyledQuestionText
          color='darkGray'
          margin='none'
          weight='bold'
        >
          {question}
        </StyledQuestionText>
        <br />
        <StyledDescriptionText
          color='darkGray'
          margin={{ bottom: 'large' }}
        >
          {description}
        </StyledDescriptionText>
        <RangeInput
          max={estimatedMax}
          min={estimatedMin}
          step={(valueType === 'quantity') ? 1 : 0.01}
          value={value}
          onChange={onChange}
        />
        <Box
          direction='row'
          fill='horizontal'
          justify='between'
          margin={{ top: 'small' }}
        >
          <Text
            color='darkGray'
            size='large'
            weight='bold'
          >
            {formatNumber(valueType, estimatedMin)}
          </Text>
          <Text
            color='darkGray'
            size='large'
            weight='bold'
          >
            {formatNumber(valueType, estimatedMax)}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default TermCard
