const { Kafka, logLevel } = require('kafkajs');

class KafkaServiceProducer {
  producer;

  constructor() {
    const kafka = new Kafka({
      clientId: 'api',
      brokers: ['localhost:9092'],
      logLevel: logLevel.WARN,
    });

    this.producer = kafka.producer();
  }

  async produce({ topic, messages }) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages,
    });
    await this.producer.disconnect();
  }
}

export default KafkaServiceProducer;
