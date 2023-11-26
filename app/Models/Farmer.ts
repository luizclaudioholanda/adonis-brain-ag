import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Farm from './Farm'

export default class Farmer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ columnName: 'documentNumber' })
  public documentNumber: string

  @hasMany(() => Farm, {
    foreignKey: 'farmId',
  })
  public farms: HasMany<typeof Farm>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
