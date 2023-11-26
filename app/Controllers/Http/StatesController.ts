import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import State from 'App/Models/State'

export default class StatesController {
  public async get() {
    return await State.all()
  }

  public async post({ request }: HttpContextContract) {
    const newState = request.all() as Partial<State>

    const state = await State.create(newState)

    return state
  }

  public async totalFarmByState({ response }: HttpContextContract) {
    const result = await Database.rawQuery(
      'SELECT states.name, COUNT(states.id) FROM states, farms WHERE states.id = farms.state_id GROUP BY states.name'
    )

    response.send(result)
  }
}
