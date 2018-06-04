'use strict'

const Schema = use('Schema')

class StatusmatchesSchema extends Schema {
  up () {
    this.create('statusmatches', (table) => {
      table.increments()
      table.string('name', 40).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('statusmatches')
  }
}

module.exports = StatusmatchesSchema
