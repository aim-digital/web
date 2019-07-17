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
      title: 'VitruvianTech',
      fallbackExpression: 'MSIE (?:[0-9]|10).\\d',
      enabled: true,
      theme: '@aim-digital/web',
      app: '@aim-digital/web:App',
      page: '@aim-digital/web:Page'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.destroy({
      where: {
        title: 'VitruvianTech'
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
