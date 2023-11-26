import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import State from 'App/Models/State'

export default class StateSeeder extends BaseSeeder {
  public async run() {
    await State.createMany([
      {
        name: 'São Paulo',
      },
      {
        name: 'Minas Gerais',
      },
    ])
  }
}
