import {
  Box,
  Heading,
  Text
} from 'grommet'

import background1 from '../assets/Background1.png'

function AreWeAlone () {
  return (
    <Box
      align='center'
      background={`url(${background1})`}
      height='100vh'
      justify='center'
    >
      <Heading
        color='darkGray'
        level={1}
        margin={{ bottom: 'small' }}
        size='large'
        textAlign='center'
      >
        ARE WE ALONE?
      </Heading>
      <Text
        color='darkGray'
        margin='none'
        size='xlarge'
        textAlign='center'
        weight='bold'
      >
        How many alien civilizations might be out there?
      </Text>
      <Text
        color='darkGray'
        margin='none'
        size='xlarge'
        textAlign='center'
        weight='bold'
      >
        Use math to find out.
      </Text>
    </Box>
  )
}

export default AreWeAlone
