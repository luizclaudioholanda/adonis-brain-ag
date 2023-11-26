import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import City from './City'
import Farm from './Farm'

export default class State extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @hasMany(() => City, {
    foreignKey: 'stateId',
  })
  public cities: HasMany<typeof City>

  @hasMany(() => Farm, {
    foreignKey: 'farmId',
  })
  public farms: HasMany<typeof Farm>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
