import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      auth: 'login'
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      auth: null
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }
}
