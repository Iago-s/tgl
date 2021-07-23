const { Kafka, logLevel } = require('kafkajs');
const nodemailer = require('nodemailer');

const PORT = 3334;
const app = require('./app');

const kafka = new Kafka({
  clientId: 'MS_EMAILS',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
});

const consumer = kafka.consumer({ groupId: 'admins' });

async function run() {
  consumer.connect();
  consumer.subscribe({ topic: 'email', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
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
        to: message.value,
        subject: 'MS envio email',
        text: 'Foi criado uma nova aposta!',
        html: '<b>Nova aposta criada ADMIN</b>',
      });

      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      console.log('Email admin: ', message.value.toString());
    },
  });

  app.listen(PORT, () =>
    console.log(`Server started http://localhost:${PORT}`)
  );
}

run().catch((err) => console.log({ error: err.message }));
