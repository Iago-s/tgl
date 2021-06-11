'use strict';

const Bet = use('App/Models/Bet');

class BetController {
  async index() {
    const bets = await Bet.query().with('user');

    return bets;
  }

  async store({ request, response, auth }) {
    const { type, numbers, color, price } = request.all();

    try {
      const bet = await Bet.create({
        user_id: auth.user.id,
        type,
        numbers,
        color,
        price,
      });

      return bet;
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: 'Não foi possivel cria o jogo.' });
    }
  }
}

module.exports = BetController;
