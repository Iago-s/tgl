'use strict';

const Game = use('App/Models/Game');

class GameController {
  async index() {
    const games = await Game.all();

    return games;
  }

  async store({ request, response }) {
    const {
      type,
      description,
      color,
      price,
      range,
      max_number,
      min_cart_value,
    } = request.all();

    try {
      const game = await Game.create({
        type,
        description,
        color,
        price,
        range,
        max_number,
        min_cart_value,
      });

      return game;
    } catch (err) {
      return response.status(err.status).send({ message: 'Algo deu errado' });
    }
  }
}

module.exports = GameController;
