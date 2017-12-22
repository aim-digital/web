import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      app: '@vitruvian-tech/machete-bundle:App'
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      app: '@machete-platform/core-bundle:App'
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }
}
