import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'posts(/:collection)',
      page: '@vitruviantech/web:PostCollection',
      headers: '["@vitruviantech/web:Post"]',
      sections: '["@vitruviantech/web:PostCollection"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'posts(/:collection)',
        page: '@vitruviantech/web:PostCollection',
        headers: '["@vitruviantech/web:Post"]',
        sections: '["@vitruviantech/web:PostCollection"]'
      }
    });
  }
}
