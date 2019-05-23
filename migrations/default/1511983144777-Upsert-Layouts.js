import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.create({
      title: 'VitruvianTech',
      theme: '@vitruviantech/web',
      app: '@boilerplatejs/core:App',
      page: '@vitruviantech/web:Page'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    await Layout.destroy({
      where: {
        title: 'VitruvianTech',
        theme: '@vitruviantech/web',
        app: '@boilerplatejs/core:App',
        page: '@vitruviantech/web:Page'
      }
    });
  }
}
