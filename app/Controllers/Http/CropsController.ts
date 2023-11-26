import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CropsController {
  public async totalFarmByCrop({ response }: HttpContextContract) {
    const result = await Database.rawQuery(
      'SELECT name, COUNT(*) AS Total FROM crops GROUP BY name;'
    )

    response.send(result)
  }
}
