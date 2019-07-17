import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      page: '@aim-digital/web:Plans'
    }, {
      where: {
        route: 'plans'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@aim-digital/web:Plans", "@aim-digital/web:Contact"]',
      page: null
    }, {
      where: {
        route: 'plans'
      }
    });
  }
}
