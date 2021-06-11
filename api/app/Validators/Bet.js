'use strict';

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
}

module.exports = Bet;
