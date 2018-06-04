'use strict'

const Schema = use('Schema')

class MatchesSchema extends Schema {
  up () {
    this.create('matches', (table) => {
      table.increments()
      table.integer('group_id').unsigned().references('id').
        inTable('groups').onDelete('CASCADE').onUpdate('CASCADE')
        table.integer('local_id').unsigned().references('id').
        inTable('teams').onDelete('CASCADE').onUpdate('CASCADE')
        table.integer('visitor_id').unsigned().references('id').
        inTable('teams').onDelete('CASCADE').onUpdate('CASCADE')
        table.integer('statusmatch_id').unsigned().references('id').
        inTable('statusmatches').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('localgoals')
      table.integer('visitorgoals')
      table.dateTime('datetime')
      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = MatchesSchema
