import Route from '@ioc:Adonis/Core/Route'

Route.post('farmers', 'FarmersController.post')
Route.get('farmers', 'FarmersController.get')
Route.delete('farmers/:id', 'FarmersController.delete')
