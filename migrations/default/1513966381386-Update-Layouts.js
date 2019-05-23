import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      app: '@vitruviantech/web:App'
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      app: '@boilerplatejs/core:App'
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }
}
