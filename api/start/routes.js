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
