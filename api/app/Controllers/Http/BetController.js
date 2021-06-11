'use strict';

const Bet = use('App/Models/Bet');

class BetController {
  async index({ auth }) {
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
