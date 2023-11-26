import Route from '@ioc:Adonis/Core/Route'

Route.post('farms', 'FarmsController.post')
Route.get('farms', 'FarmsController.get')
Route.delete('farms/:id', 'FarmsController.delete')
Route.get('farms/totalByState', 'FarmsController.get')
