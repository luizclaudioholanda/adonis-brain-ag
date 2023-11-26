import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Farmer from 'App/Models/Farmer'

export default class FarmerSeeder extends BaseSeeder {
  public async run() {
    await Farmer.createMany([
      {
        name: 'Fazendeiro 1',
        documentNumber: '333333333',
      },
      {
        name: 'Fazendeiro 2',
        documentNumber: '444444444',
      },
    ])
  }
}
