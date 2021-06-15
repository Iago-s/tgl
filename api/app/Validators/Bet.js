'use strict';

const Antl = use('Antl');

class Bet {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      type: 'required',
      numbers: 'required',
      price: 'required',
      color: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Bet;
