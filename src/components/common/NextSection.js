import {
  Button
} from 'grommet'
import { FormDown } from 'grommet-icons'

function NextSection ({
  setActiveTerm = () => {},
  to
}) {
  return (
    <Button
      alignSelf='center'
      href={`#${to}`}
      icon={<FormDown />}
      onClick={() => setActiveTerm(to)}
    />
  )
}

export default NextSection
