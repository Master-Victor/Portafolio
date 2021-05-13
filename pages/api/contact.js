export default async function (req, res) {
  let nodemailer = require('nodemailer')
  require('dotenv').config()
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "mail.privateemail.com",
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
    secure: false,
  })

  const info =  await transporter.sendMail({
    from: ` 'Contact Email' <${process.env.user}>` ,
    to: process.env.email,
    subject: `formulario de contacto: ${req.body.name}` ,
    text: `${req.body.message}

    Email: ${req.body.email}
    `
  })
}