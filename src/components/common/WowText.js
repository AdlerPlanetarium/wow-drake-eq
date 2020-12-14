import {
  Text
} from 'grommet'

function WowText ({ content }) {
  return (
    <Text
      color='darkGray'
      margin='none'
      size='xlarge'
      weight='bold'
    >
      {content}
    </Text>
  )
}

export default WowText
