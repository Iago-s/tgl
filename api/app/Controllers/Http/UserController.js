'use strict';

const User = use('App/Models/User');

const Mail = use('Mail');
const Env = use('Env');

class UserController {
  async index() {
    const users = await User.all();

    return users;
  }

  async store({ request, response }) {
    const { name, email, password } = request.all();

    if (name && name.length === 0) {
      return response
        .status(400)
        .send({ error: true, message: 'Nome não pode ser vazio.' });
    }

    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email && (email === '' || !regex.test(email))) {
      return response
        .status(400)
        .send({ error: true, message: 'Informe um email valido.' });
    }

    if (password && (password === '' || password.length < 6)) {
      return response.status(400).send({
        error: true,
        message: 'A senha deve ter 6 ou mais caracteres.',
      });
    }

    try {
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
    } catch (err) {
      response
        .status(err.status)
        .send({ message: 'Não foi possivel cadastrar esse usuário.' });
    }
  }

  async update({ request, response, auth }) {
    try {
      const user = await User.findByOrFail('id', auth.user.id);

      const { name, email, password } = request.all();

      user.merge({ name, email, password });

      await user.save();

      return response
        .status(200)
        .send({ message: 'Parabéns, seus dados foi alterado com sucesso!' });
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: 'Falha ao atualizar o usuário' });
    }
  }

  async destroy({ response, params }) {
    try {
      const user = await User.findOrFail(params.id);

      await user.delete();

      return response
        .status(200)
        .send({ message: 'Conta apagada com sucesso!' });
    } catch (err) {
      return response.status(err.status).send({
        message: 'Falha ao apagar a conta.',
      });
    }
  }
}

module.exports = UserController;
