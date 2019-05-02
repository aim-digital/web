import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      fallbackExpression: 'MSIE (?:[0-9]|10).\\d'
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      fallbackExpression: null
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }
}
