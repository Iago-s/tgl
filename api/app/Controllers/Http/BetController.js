'use strict';

const KafkaProducer = require('../../Services/Kafka');

const Bet = use('App/Models/Bet');

const Mail = use('Mail');
const Env = use('Env');

class BetController {
  producer;

  constructor() {
    const kafka = new Kafka({
      clientId: 'api',
      brokers: ['localhost:9092'],
      logLevel: logLevel.WARN,
    });

    this.producer = kafka.producer();
  }

  async index({ request, auth }) {
    /*const { page } = request.get();
    const { filter } = request.all();

    if (filter) {
      const bets = await Bet.query('users')
        .where({ user_id: auth.user.id, type: filter })
        .paginate(page, 5);

      return bets;
    }*/

    const bets = await Bet.query().where('user_id', auth.user.id).fetch();

    return bets;
  }

  async store({ request, response, auth }) {
    const { bets } = request.all();

    const formatedBets = bets.map((element) => {
      return {
        ...element,
        user_id: auth.user.id,
      };
    });

    try {
      await Bet.createMany(formatedBets);

      const producer = new KafkaProducer();

      await producer.produce({
        topic: 'email',
        messages: [{ value: auth.user.email }],
      });

      await Mail.send(['home'], { path: 'emails/new-bet' }, (message) => {
        message
          .to(auth.user.email)
          .from(Env.get('EMAIL'), 'Time TGL')
          .subject('Nova aposta criada');
      });

      return response
        .status(200)
        .send({ message: 'Apostas criadas com sucesso. Boa sorte!' });
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: 'Não foi possivel cria o jogo.' });
    }
  }
}

module.exports = BetController;
