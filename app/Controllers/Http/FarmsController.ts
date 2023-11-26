import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Farm from 'App/Models/Farm'

export default class FarmsController {
  public async get() {
    return await Farm.all()
  }

  public async post({ request }: HttpContextContract) {
    const newFarm = request.all() as Partial<Farm>
    newFarm.stateId = newFarm.state?.id
    newFarm.farmerId = newFarm.farmer?.id

    const farm = await Farm.create(newFarm)

    return farm
  }

  public async totalByState({ response }: HttpContextContract) {
    const result = await Database.rawQuery(
      'SELECT farms.name, COUNT(states.id) FROM farms, states WHERE states.id = farms.state_id GROUP BY farms.name'
    )

    response.send(result)
  }

  public async delete({ params }: HttpContextContract) {
    const farm = await Farm.find(params.id)

    farm?.delete()
  }
}
