import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Farms extends BaseSchema {
  protected tableName = 'farms'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('farmer_id').unsigned().references('farmers.id')
      table.integer('state_id').unsigned().references('states.id')

      table.string('name').notNullable()
      table.double('areable_area').notNullable()
      table.double('vegetation_area').notNullable()
      table.double('total_area').notNullable()

      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
