'use strict'

const Schema = use('Schema')

class PredictionsSchema extends Schema {
  up() {
    this.create('predictions', (table) => {
      table.increments()
      table.integer('board_id').unsigned().references('id').
        inTable('boards').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('match_id').unsigned().references('id').
        inTable('matches').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('localgoals')
      table.integer('visitorsgoals')
      table.integer('user_id').unsigned().references('id').
        inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('poinsts')
      table.timestamps()
    })
  }

  down() {
    this.drop('predictions')
  }
}

module.exports = PredictionsSchema
