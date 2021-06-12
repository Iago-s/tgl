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

  async update({ request, response, params }) {
    try {
      const game = await Game.findOrFail(params.id);
      const {
        type,
        description,
        color,
        price,
        range,
        max_number,
        min_cart_value,
      } = request.all();

      game.merge({
        type,
        description,
        color,
        price,
        range,
        max_number,
        min_cart_value,
      });
      await game.save();

      return response
        .status(200)
        .send({ message: 'Parabéns, seu jogo foi alterado com sucesso!' });
    } catch (err) {
      return response.status(err.status).send({
        message: 'Falha ao atualizar o jogo. Esse jogo existe?',
      });
    }
  }

  async destroy({ response, params }) {
    try {
      const game = await Game.findOrFail(params.id);

      await game.delete();

      return response
        .status(200)
        .send({ message: 'Jogo apagado com sucesso!' });
    } catch (err) {
      return response.status(err.status).send({
        message: 'Falha ao apagar o jogo. Esse jogo existe?',
      });
    }
  }
}

module.exports = GameController;
