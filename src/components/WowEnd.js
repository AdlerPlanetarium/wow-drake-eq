import {
  Box
} from 'grommet'

import background3 from '../assets/Background3.png'
import getResult from '../helpers/getResult'
import WowHeading from './common/WowHeading'
import WowText from './common/WowText'

function WowEnd ({ values }) {
  const result = getResult(values)

  return (
    <Box
      id='wowEnd'
      align='center'
      background={`url(${background3})`}
      height='80vh'
      justify='center'
      pad='small'
    >
      <WowHeading
        content='WOW!'
      />
      <WowText
        content='If your guesses turn out to be right, there are'
      />
      <WowHeading
        content={Math.round(result).toLocaleString()}
      />
      <WowText
        content='alien civilizations in our galaxy who are trying to get your attention!'
      />
    </Box>
  )
}

export default WowEnd
