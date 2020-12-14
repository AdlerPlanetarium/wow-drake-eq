import {
  Heading
} from 'grommet'

function WowHeading ({ content }) {
  return (
    <Heading
      color='darkGray'
      level={1}
      margin={{ vertical: 'small' }}
      size='large'
    >
      {content}
    </Heading>
  )
}

export default WowHeading
