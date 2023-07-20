const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_USER, EMAIL_PASS } = process.env

async function main() {
  try {
    const email = {
      to: 'marchenkodanil97@gmail.com',
      from: 'marchenkodanil97@gmail.com', // Use the email address or domain you verified above
      subject: 'Sending with Nodemailer is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    var transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const response = await transport.sendMail(email)
    console.log(response)
  } catch (error) {
    console.error('Application error', error)
  }
}

main()
