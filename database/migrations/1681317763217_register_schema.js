'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegisterSchema extends Schema {
  up () {
    this.create('registers', (table) => {
      table.increments()
      table.string('username', 100).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 30).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('registers')
  }
}

module.exports = RegisterSchema
