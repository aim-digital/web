import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      page: '@vitruvian-tech/machete-bundle:Home',
      sections: '["@vitruvian-tech/machete-bundle:Home"]'
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
