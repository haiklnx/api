import Usuario from '../models/Usuario';

class IndexController {
  async index(req, res) {
    console.log(res.status(200));
    res.json(req.body.msg);
  }
}

export default new IndexController();
