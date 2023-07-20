const nodemailer = require('nodemailer')

const { EMAIL_USER, EMAIL_PASS } = process.env

async function sendEmail({ to, subject, html }) {
  const email = {
    from: 'info@bookingclub.com',
    to,
    subject,
    html,
  }

  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  await transport.sendMail(email)
}

module.exports = sendEmail
