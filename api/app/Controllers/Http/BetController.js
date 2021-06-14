'use strict';

const Bet = use('App/Models/Bet');

const Mail = use('Mail');
const Env = use('Env');

class BetController {
  async index({ request, auth }) {
    const { page } = request.get();

    const bets = await Bet.query()
      .where('user_id', auth.user.id)
      .paginate(page, 10);

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
