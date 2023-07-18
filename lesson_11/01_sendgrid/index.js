const sendgrid = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API } = process.env

async function main() {
  try {
    sendgrid.setApiKey(SENDGRID_API)

    const email = {
      //   from: 'bob@gmail.com', // not verified email
      from: 'marchenkodanil97@gmail.com',
      to: 'marchenkodaniel97@gmail.com',
      subject: 'sendgrid test',
      html: '<h1>Hello there</h1>',
      text: 'Hello there',
    }

    const response = await sendgrid.send(email)
    console.log(response)
  } catch (error) {
    console.error('Application Error: ', error)
  }
}

main()
