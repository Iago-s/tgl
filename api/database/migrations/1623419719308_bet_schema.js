'use strict';

const Schema = use('Schema');

class BetSchema extends Schema {
  up() {
    this.create('bets', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('type').notNullable();
      table.string('numbers').notNullable();
      table.decimal('price');
      table.string('color');
      table.timestamps();
    });
  }

  down() {
    this.drop('bets');
  }
}

module.exports = BetSchema;
