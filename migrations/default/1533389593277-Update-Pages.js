import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      page: '@fox-zero/web:Support'
    }, {
      where: {
        page: '@fox-zero/web:About'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
