const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASS, EMAIL_USER } = process.env

async function main() {
  try {
    const email = {
      from: 'marchenkodanil97@gmail.com',
      to: 'marchenkodaniel97@gmail.com',
      subject: 'Nodemailer test',
      html: '<h1>Hello there</h1>',
      text: 'Hello there',
    }

    const transport = nodemailer.createTransport({
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
    console.error('Application Error: ', error)
  }
}
main()
