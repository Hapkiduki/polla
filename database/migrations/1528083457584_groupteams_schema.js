'use strict'

const Schema = use('Schema')

class GroupteamsSchema extends Schema {
  up() {
    this.create('groupteams', (table) => {
      table.increments()
      table.integer('group_id').unsigned().references('id').
        inTable('groups').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('team_id').unsigned().references('id').
        inTable('teams').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('groupteams')
  }
}

module.exports = GroupteamsSchema
