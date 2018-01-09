import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      page: '@vitruvian-tech/machete-bundle:Plans'
    }, {
      where: {
        route: 'plans'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      headers: '["@vitruvian-tech/machete-bundle:Plans", "@vitruvian-tech/machete-bundle:Contact"]',
      page: null
    }, {
      where: {
        route: 'plans'
      }
    });
  }
}
