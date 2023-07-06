const jwt = require('jsonwebtoken')

const JWT_SECRET = 'WARNING secret information' // should be stored in .env file - SECRET INFORMATION

async function main() {
  // generate token
  const payload = { id: '1235321', email: 'test@gmail.com' }
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '15s', // 15 seconds
  })
  console.log('token', token)

  // check if token valid
  try {
    const result = jwt.verify(token, JWT_SECRET)
    console.log('result = ', result)
  } catch (error) {
    console.error('verification error', error)
  }

  // expired error
  try {
    const expiredToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzUzMjEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjgzMjAxNjg2LCJleHAiOjE2ODMyMDE3MDF9.NLnPBq68mFO0yRGhZ6rKd7U20ZP
    n6Jve04x71Mdb6rI`
    const result = jwt.verify(expiredToken, JWT_SECRET)
    console.log('result = ', result)
  } catch (error) {
    console.error('verification error', error.name)
  }
}

main()
