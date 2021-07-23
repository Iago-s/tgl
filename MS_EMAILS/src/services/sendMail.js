const nodemailer = require('nodemailer');

async function sendMail(email) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Micro serviço" <iago@email.com>',
    to: email,
    subject: 'MS envio email',
    text: 'Foi criado uma nova aposta!',
    html: '<b>Nova aposta criada ADMIN</b>',
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

module.exports = sendMail;
