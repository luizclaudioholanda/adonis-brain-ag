import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import City from 'App/Models/City'

export default class CitySeeder extends BaseSeeder {
  public async run() {
    await City.createMany([
      {
        name: 'São José dos Campos',
        stateId: 1,
      },
      {
        name: 'Jacarei',
        stateId: 1,
      },
      {
        name: 'Caçapava',
        stateId: 1,
      },
      {
        name: 'Belo Horizonte',
        stateId: 2,
      },
    ])
  }
}
