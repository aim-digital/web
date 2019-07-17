import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      page: '@aim-digital/web:Home',
      sections: '["@aim-digital/web:Home"]'
    }, {
      where: {
        route: '/'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      page: null,
      sections: null
    }, {
      where: {
        route: '/'
      }
    });
  }
}
