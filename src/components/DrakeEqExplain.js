import {
  Box,
  Paragraph,
  Text
} from 'grommet'

import background2 from '../assets/Background2.png'
import NextSection from './common/NextSection'

function DrakeEqExplain ({
  setActiveTerm,
  size
}) {
  return (
    <Box
      id='drakeEqExplain'
      align='center'
      background={`url(${background2})`}
      height='80vh'
      justify='center'
      pad='small'
    >
      <Paragraph
        color='white'
        textAlign={size === 'small' ? 'center' : 'start'}
      >
        <Text
          color='brand'
          weight='bold'
        >
          This is the Drake Equation.
          {' '}
        </Text>
        <Text>
          It might look a little complicated, but the idea is pretty simple: if we know how common certain things are in our galaxy, we can estimate how many alien civilizations might be out there. While we don't know for sure if our estimate is correct, the Drake Equation helps us think through all the factors that go into finding life beyond Earth. We'll still have to actually FIND aliens to know if we're right.
        </Text>
      </Paragraph>
      <Paragraph
        color='white'
        margin={{ bottom: 'none' }}
        textAlign={size === 'small' ? 'center' : 'start'}
      >
        Click or tap the squares below to learn about each variable and take your best guess. When you're done, we'll show you how many alien societies could be right here in the Milky Way, trying to communicate with you!
      </Paragraph>
      <NextSection
        setActiveTerm={setActiveTerm}
        to='rstar'
      />
    </Box>
  )
}

export default DrakeEqExplain
