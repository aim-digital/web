import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'posts(/:collection)',
      page: '@vitruvian-tech/machete-bundle:PostCollection',
      headers: '["@vitruvian-tech/machete-bundle:Post"]',
      sections: '["@vitruvian-tech/machete-bundle:PostCollection"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'posts(/:collection)',
        page: '@vitruvian-tech/machete-bundle:PostCollection',
        headers: '["@vitruvian-tech/machete-bundle:Post"]',
        sections: '["@vitruvian-tech/machete-bundle:PostCollection"]'
      }
    });
  }
}
