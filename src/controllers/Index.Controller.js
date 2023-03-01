import Usuario from '../models/Usuario';

class IndexController {
  async index(req, res) {
    const usuario = await Usuario.create({
      login: 'x',
      senha: 'x',
      email: 'x',
    });
    res.json(usuario);
  }
}

export default new IndexController();
