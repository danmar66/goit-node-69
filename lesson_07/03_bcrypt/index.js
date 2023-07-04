const bcrypt = require('bcrypt')

async function main() {
  const password = 'Awesome password'

  const salt = await bcrypt.genSalt()
  //   const salt = '$2b$10$neKa8pg4UeGfD3i0njp7de'
  console.log('salt = ', salt)

  hashed = await bcrypt.hash(password, salt)
  console.log('hash =', hashed)

  const isTheSame = await bcrypt.compare('Awesome password', hashed)
  console.log('is the same = ', isTheSame)
}

main()
