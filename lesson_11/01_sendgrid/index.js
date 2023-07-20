const sendgrid = require('@sendgrid/mail')
require('dotenv').config()

async function main() {
  try {
    const { SENDGRID_API_KEY } = process.env

    sendgrid.setApiKey(SENDGRID_API_KEY)

    const email = {
      to: 'zerogodmask@gmail.com',
      from: 'marchenkodanil97@gmail.com', // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    const response = await sendgrid.send(email)
    console.log('response = ', response)
  } catch (error) {
    console.error('Application error', error)
  }
}

main()
