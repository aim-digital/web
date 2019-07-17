import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'home(/:section)',
      page: '@aim-digital/web:Home',
      title: 'VitruvianTech - Sentient. Secure. Quality for All.',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      sections: '["@aim-digital/web:Home", "@aim-digital/web:Missions", "@aim-digital/web:Services", "@aim-digital/web:Plans", "@aim-digital/web:Rates", "@aim-digital/web:Hosting", "@aim-digital/web:Leadership", "@aim-digital/web:Network", "@aim-digital/web:Communications", "@aim-digital/web:Headquarters"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'home(/:section)',
        page: '@aim-digital/web:Home',
        title: 'VitruvianTech - Sentient. Secure. Quality for All.',
        headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
        sections: '["@aim-digital/web:Home", "@aim-digital/web:Missions", "@aim-digital/web:Services", "@aim-digital/web:Plans", "@aim-digital/web:Rates", "@aim-digital/web:Hosting", "@aim-digital/web:Leadership", "@aim-digital/web:Network", "@aim-digital/web:Communications", "@aim-digital/web:Headquarters"]'
      }
    });
  }
}
