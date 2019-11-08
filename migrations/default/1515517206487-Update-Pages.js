import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      page: '@fox-zero/web:Plans'
    }, {
      where: {
        route: 'plans'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@fox-zero/web:Plans", "@fox-zero/web:Contact"]',
      page: null
    }, {
      where: {
        route: 'plans'
      }
    });
  }
}
