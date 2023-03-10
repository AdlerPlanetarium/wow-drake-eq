import {
  Box,
  Heading,
  RangeInput,
  Text
} from 'grommet'
import styled from 'styled-components'

import formatNumber from '../helpers/formatNumber'
import NextSection from './common/NextSection'

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
  nextTerm,
  onValueChange,
  question,
  setActiveTerm,
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
      id={name}
      align='center'
      background='white'
      height='80vh'
      justify='center'
      pad='large'
      style={{
        scrollMarginTop: '20vh'
      }}
    >
      <Box
        background='brand'
        fill
        overflow='auto'
        pad='large'
        round='large'
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
          step={(valueType === 'quantity') ? 0.1 : 0.01}
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
        <NextSection
          to={nextTerm || 'wowEnd'}
          setActiveTerm={setActiveTerm}
        />
      </Box>
    </Box>
  )
}

export default TermCard
