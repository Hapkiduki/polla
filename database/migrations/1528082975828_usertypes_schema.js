'use strict'

const Schema = use('Schema')

class UsertypesSchema extends Schema {
  up () {
    this.create('usertypes', (table) => {
      table.increments()
      table.string('name',40).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('usertypes')
  }
}

module.exports = UsertypesSchema
