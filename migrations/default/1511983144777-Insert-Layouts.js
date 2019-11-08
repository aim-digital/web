import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.update({
      enabled: false
    }, {
      where: {
        title: 'BoilerplateJS™ - App Development Platform'
      }
    });

    await Layout.create({
      title: 'FoxZero™',
      fallbackExpression: 'MSIE (?:[0-9]|10).\\d',
      enabled: true,
      theme: '@fox-zero/web',
      app: '@fox-zero/web:App',
      page: '@fox-zero/web:Page'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.destroy({
      where: {
        title: 'FoxZero®'
      }
    });

    await Layout.update({
      enabled: true
    }, {
      where: {
        title: 'BoilerplateJS™ - App Development Platform'
      }
    });
  }
}
