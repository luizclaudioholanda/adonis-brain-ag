import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Farmer from 'App/Models/Farmer'

export default class FarmersController {
  public async get() {
    return await Farmer.all()
  }

  public async post({ request }: HttpContextContract) {
    const farmerSchema = schema.create({
      documentNumber: schema.string({ trim: true }, [
        rules.regex(new RegExp('^([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$')),
      ]),
      name: schema.string({ trim: true }),
    })

    const validateData = await request.validate({ schema: farmerSchema })

    const farmer = await Farmer.create(validateData)

    return farmer
  }

  public async delete({ params }: HttpContextContract) {
    const farmer = await Farmer.find(params.id)

    farmer?.delete()
  }
}
