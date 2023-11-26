import Route from '@ioc:Adonis/Core/Route'

Route.post('states', 'StatesController.post')
Route.get('states', 'StatesController.get')
Route.get('states/totalFarmByState', 'StatesController.get')
