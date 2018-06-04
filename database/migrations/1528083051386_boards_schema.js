'use strict'

const Schema = use('Schema')

class BoardsSchema extends Schema {
  up () {
    this.create('boards', (table) => {
      table.increments()
      table.integer('boardstatus_id').unsigned().references('id').
        inTable('boardstatus').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('user_id').unsigned().references('id').
        inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('imagepath').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('boards')
  }
}

module.exports = BoardsSchema
