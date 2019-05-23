import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      page: '@vitruviantech/web:Home',
      sections: '["@vitruviantech/web:Home"]'
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
