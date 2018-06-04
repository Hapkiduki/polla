'use strict'

const Schema = use('Schema')

class BoardstatusSchema extends Schema {
  up () {
    this.create('boardstatus', (table) => {
      table.increments()
      table.string('name', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('boardstatus')
  }
}

module.exports = BoardstatusSchema
