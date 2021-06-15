'use strict';

const Antl = use('Antl');

class Game {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      type: 'required',
      description: 'required',
      color: 'required',
      price: 'required',
      range: 'required',
      max_number: 'required',
      min_cart_value: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Game;
