const { generateNumber } = require('./generateNumber')

function lottery(expected) {
  const got = generateNumber()
  if (expected !== got) {
    return 'You lose'
  }
  return 'You won!'
}

module.exports = lottery
