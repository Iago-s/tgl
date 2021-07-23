const { Kafka, logLevel } = require('kafkajs');

const PORT = 3334;
const app = require('./app');

const sendMail = require('./services/sendMail');

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
      await sendMail(message.value);

      console.log('Email admin: ', message.value.toString());
    },
  });

  app.listen(PORT, () =>
    console.log(`Server started http://localhost:${PORT}`)
  );
}

run().catch((err) => console.log({ error: err.message }));
