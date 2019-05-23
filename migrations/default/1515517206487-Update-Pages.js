import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      page: '@vitruviantech/web:Plans'
    }, {
      where: {
        route: 'plans'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@vitruviantech/web:Plans", "@vitruviantech/web:Contact"]',
      page: null
    }, {
      where: {
        route: 'plans'
      }
    });
  }
}
