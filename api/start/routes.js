'use strict';

const Route = use('Route');

Route.post('users', 'UserController.store').validator('User');
Route.get('users', 'UserController.show');
Route.post('auth', 'AuthController.store').validator('Auth');

Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
);
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
);

Route.post('games', 'GameController.store').validator('Game');
Route.get('games', 'GameController.index');

Route.group(() => {
  Route.get('bets', 'BetController.index');
  Route.post('bets', 'BetController.store').validator('Bet');
}).middleware(['auth']);
