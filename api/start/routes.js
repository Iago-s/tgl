'use strict';

const Route = use('Route');

Route.get('users', 'UserController.index');
Route.post('users', 'UserController.store').validator('User');
Route.delete('users/:id', 'UserController.destroy');

Route.post('auth', 'AuthController.store').validator('Auth');

Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
);
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
);

Route.get('games', 'GameController.index');
Route.post('games', 'GameController.store').validator('Game');
Route.put('games/:id', 'GameController.update').validator('Game');
Route.delete('games/:id', 'GameController.destroy');

Route.group(() => {
  Route.put('users', 'UserController.update');

  Route.get('bets', 'BetController.index');
  Route.post('bets', 'BetController.store');
}).middleware(['auth']);
