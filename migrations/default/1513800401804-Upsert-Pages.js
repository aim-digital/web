import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'plans',
      title: 'VitruvianTech - Pricing Plans',
      headers: '["@aim-digital/web:Plans", "@aim-digital/web:Contact"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'plans',
        title: 'VitruvianTech - Pricing Plans',
        headers: '["@aim-digital/web:Plans", "@aim-digital/web:Contact"]'
      }
    });
  }
}
