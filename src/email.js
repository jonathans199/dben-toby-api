const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'jonathans199@gmail.com',
  from: 'jonsthewebguy@gmail.com',
  subject: 'Sending with Sendgrid is fun',
  text: 'and easy to do anywhere WITH NODE.JS',
  html: '<strong>and easy to do html</strong>'
}

sgMail.send(msg)
