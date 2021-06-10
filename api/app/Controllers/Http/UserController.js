'use strict';

const User = use('App/Models/User');

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'name', 'email', 'password']);
    const user = await User.create(data);

    return user;
  }

  async show() {
    const users = User.all();

    return users;
  }
}

module.exports = UserController;
