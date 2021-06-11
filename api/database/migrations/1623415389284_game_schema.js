'use strict';

const Schema = use('Schema');

class GameSchema extends Schema {
  up() {
    this.create('games', (table) => {
      table.increments();
      table.string('type', 50).notNullable();
      table.text('description').notNullable();
      table.string('color').notNullable();
      table.decimal('price').notNullable();
      table.integer('range').notNullable();
      table.integer('max_number').notNullable();
      table.decimal('min_cart_value').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('games');
  }
}

module.exports = GameSchema;
