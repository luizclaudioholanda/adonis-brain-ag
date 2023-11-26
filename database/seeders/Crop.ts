import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Crop from 'App/Models/Crop'

export default class CropSeeder extends BaseSeeder {
  public async run() {
    await Crop.createMany([
      {
        name: 'Soja',
        farmId: 1,
      },
      {
        name: 'Milho',
        farmId: 1,
      },
      {
        name: 'Algodao',
        farmId: 2,
      },
      {
        name: 'Cana de acucar',
        farmId: 2,
      },
      {
        name: 'Cafe',
        farmId: 2,
      },
    ])
  }
}
