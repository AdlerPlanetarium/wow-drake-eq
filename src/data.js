const data = {
  rstar: {
    name: 'rstar',
    displayName: 'R',
    subscript: '*',
    valueType: 'quantity',
    question: 'How many stars form in our galaxy per year?',
    description: 'Scientists estimate the number is between one and five. What do you think? Use the slider to pick a number!',
    estimatedMin: 1,
    estimatedMax: 5,
    defaultValue: 3
  },
  fp: {
    name: 'fp',
    displayName: 'f',
    subscript: 'p',
    valueType: 'percentage',
    question: 'What percentage of stars have planets in orbit around them?',
    description: 'Scientists estimate the answer is between 40 and 100 percent. Slide your guess below!',
    estimatedMin: 0.4,
    estimatedMax: 1.0,
    defaultValue: 0.7
  },
  ne: {
    name: 'ne',
    displayName: 'n',
    subscript: 'e',
    valueType: 'quantity',
    question: 'On average, how many planets per planet-having star can support life?',
    description: 'Estimates range from .01 to 4. You know what to do.',
    estimatedMin: 0,
    estimatedMax: 4,
    defaultValue: 1
  },
  fl: {
    name: 'fl',
    displayName: 'f',
    subscript: 'l',
    valueType: 'percentage',
    question: 'Of the planets that COULD support life, how many of them actually WILL develop life at some point?',
    description: 'Zero percent? One hundred percent? Since we know of only one planet (Earth) that developed life (us! plus tigers, trees, etc.!), we can only guess how many others are out there.',
    estimatedMin: 0.0,
    estimatedMax: 1.0,
    defaultValue: 0.5
  },
  fi: {
    name: 'fi',
    displayName: 'f',
    subscript: 'i',
    valueType: 'percentage',
    question: 'On the planets that DO develop life, what percentage of them will develop intelligent life? Or at least intelligent enough to create a society and start wondering about aliens?',
    description: 'None of them, all of them, or somewhere in between? Slide the slider to your answer!',
    estimatedMin: 0.0,
    estimatedMax: 1.0,
    defaultValue: 0.5
  },
  fc: {
    name: 'fc',
    displayName: 'f',
    subscript: 'c',
    valueType: 'percentage',
    question: 'What fraction of these "intelligent" societies will develop technology to send detectable signals into space?',
    description: 'We\'re all just guessing here, but let\'s say it\'s somewhere between 5 and 50 percent. You be the judge!',
    estimatedMin: 0.05,
    estimatedMax: 0.50,
    defaultValue: 0.30
  },
  L: {
    name: 'L',
    displayName: 'L',
    subscript: '',
    valueType: 'log',
    question: 'If there are aliens blasting signals into space, how many years do you think they\'ll keep at it?',
    description: 'The more years they spend sending out signals, the more time the rest of us have to detect them!',
    estimatedMin: 0,
    estimatedMax: 5,
    defaultValue: 2.60
  }
}

export default data
