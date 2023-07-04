const base64 = require('base-64')
const md5 = require('md5')

async function main() {
  const password = 'very strong password'
  const password2 = 'very strong password'

  // encoding
  //   const encoded = base64.encode(passward)
  //   console.log('encoded = ', encoded)

  //   const decoded = base64.decode(encoded)
  //   console.log('decoded = ', decoded)

  // hashing
  //   const password3 =
  //     'very strong password very strong password very strong password very strong password'
  const hash = md5(password)

  const hash2 = md5(password2)
  //   const hash3 = md5(password3)
  console.log('hash = ', hash)
  console.log('hash = ', hash2)
  //   console.log('hash = ', hash3)
}

main()
