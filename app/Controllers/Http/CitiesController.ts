import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import City from 'App/Models/City'

export default class CitiesController {
  public async get() {
    return await City.query().preload('state')
  }

  public async post({ request }: HttpContextContract) {
    const newCity = request.all() as Partial<City>
    newCity.stateId = newCity.state?.id

    const city = await City.create(newCity)

    return city
  }
}
