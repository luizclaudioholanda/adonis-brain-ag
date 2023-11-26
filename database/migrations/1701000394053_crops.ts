import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Crops extends BaseSchema {
  protected tableName = 'crops'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('farm_id').unsigned().references('farms.id')
      table.timestamps(true)

      table.string('name').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
