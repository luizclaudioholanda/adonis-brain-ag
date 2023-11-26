import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Farmers extends BaseSchema {
  protected tableName = 'farmers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)

      table.string('name').notNullable()
      table.string('documentNumber').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
