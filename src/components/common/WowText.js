import {
  Text
} from 'grommet'

function WowText ({ content }) {
  return (
    <Text
      color='darkGray'
      margin='none'
      size='xlarge'
      textAlign='center'
      weight='bold'
    >
      {content}
    </Text>
  )
}

export default WowText
