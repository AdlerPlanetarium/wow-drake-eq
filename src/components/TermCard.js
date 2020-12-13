import {
  Box
} from 'grommet'

function TermCard ({
  displayName,
  subscript,
  question,
  description
}) {
  return (
    <Box
      align='center'
      background='white'
      height='90vh'
      justify='center'
      pad='large'
    >
      <Box
        align='center'
        background='brand'
        fill
        justify='center'
        round='large'
      >
        <p>{displayName}<sub>{subscript}</sub></p>
        <p>{question}</p>
        <p>{description}</p>
      </Box>
    </Box>
  )
}

export default TermCard
