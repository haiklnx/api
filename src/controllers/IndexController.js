import Usuario from '../models/Usuario';

class IndexController {
  async index(req, res) {
    res.json(req.body.msg);
  }
}

export default new IndexController();
