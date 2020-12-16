import {
  Button
} from 'grommet'
import { Down } from 'grommet-icons'

function NextSection ({
  setActiveTerm = () => {},
  to
}) {
  return (
    <Button
      alignSelf='center'
      href={`#${to}`}
      icon={
        <Down
          color='darkGray'
          size={(to === 'drakeEqExplain' || to === 'wowEnd') ? 'large' : 'medium'}
        />
      }
      margin={{ top: ((to === 'drakeEqExplain') ? 'large' : 'small') }}
      onClick={() => setActiveTerm(to)}
    />
  )
}

export default NextSection
