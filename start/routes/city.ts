import Route from '@ioc:Adonis/Core/Route'

Route.post('cities', 'CitiesController.post')
Route.get('cities', 'CitiesController.get')
