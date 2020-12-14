import {
  Button
} from 'grommet'
import { FormDown } from 'grommet-icons'

function NextSection ({ to }) {
  return (
    <Button
      alignSelf='center'
      href={`#${to}`}
      icon={<FormDown />}
    />
  )
}

export default NextSection
