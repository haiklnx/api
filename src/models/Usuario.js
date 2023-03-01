import Sequelize, { Model } from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      login: Sequelize.STRING,
      senha: Sequelize.STRING,
      email: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
