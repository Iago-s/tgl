'use strict';

const User = use('App/Models/User');

const Mail = use('Mail');
const Env = use('Env');

class UserController {
  async store({ request }) {
    const { name, email, password } = request.all();

    const user = await User.create({
      name,
      email,
      password,
    });

    await Mail.send(['emails.welcome-user'], { name }, (message) => {
      message
        .to(email)
        .from(Env.get('EMAIL'), 'Time TGL')
        .subject('Seja bem vindo ao TGL!');
    });

    return user;
  }

  async show() {
    const users = User.all();

    return users;
  }
}

module.exports = UserController;
