import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Farm from 'App/Models/Farm'

export default class FarmSeeder extends BaseSeeder {
  public async run() {
    await Farm.createMany([
      {
        name: 'Fazenda 1',
        areable_area: 100,
        vegetation_area: 50,
        total_area: 150,
        farmerId: 2,
        stateId: 1,
      },
      {
        name: 'Fazenda 2',
        areable_area: 1000,
        vegetation_area: 50,
        total_area: 950,
        farmerId: 2,
        stateId: 1,
      },
    ])
  }
}
