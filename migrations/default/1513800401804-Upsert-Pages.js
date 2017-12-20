import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'plans',
      title: 'VitruvianTech - Pricing Plans',
      headers: '["@vitruvian-tech/machete-bundle:Plans", "@vitruvian-tech/machete-bundle:Contact"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'plans',
        title: 'VitruvianTech - Pricing Plans',
        headers: '["@vitruvian-tech/machete-bundle:Plans", "@vitruvian-tech/machete-bundle:Contact"]'
      }
    });
  }
}
