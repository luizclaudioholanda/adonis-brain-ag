import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Farmer from './Farmer'
import State from './State'
import Crop from './Crop'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public areable_area: number

  @column()
  public vegetation_area: number

  @column()
  public total_area: number

  @hasMany(() => Crop, {
    foreignKey: 'cropId',
  })
  public crops: HasMany<typeof Crop>

  @column()
  public farmerId: number

  @belongsTo(() => Farmer)
  public farmer: BelongsTo<typeof Farmer>

  @column()
  public stateId: number

  @belongsTo(() => State)
  public state: BelongsTo<typeof State>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
