const nodemailer = require('nodemailer')
const { EMAIL_USER, EMAIL_PASS } = process.env

const sendMail = async ({ to, subject, html }) => {
  const from = 'marchenkodanil97@gmail.com'

  const email = {
    to,
    from,
    subject,
    html,
  }

  var transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  await transport.sendMail(email)
}

module.exports = sendMail
