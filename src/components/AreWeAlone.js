import {
  Box
} from 'grommet'

import background1 from '../assets/Background1.png'
import WowHeading from './common/WowHeading'
import WowText from './common/WowText'
import NextSection from './common/NextSection'

function AreWeAlone () {
  return (
    <Box
      align='center'
      background={`url(${background1})`}
      height='100vh'
      justify='center'
    >
      <WowHeading
        content='ARE WE ALONE?'
      />
      <WowText
        content='How many alien civilizations might be out there?'
      />
      <WowText
        content='Use math to find out.'
      />
      <NextSection to='drakeEqExplain' />
    </Box>
  )
}

export default AreWeAlone
