import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'home(/:section)',
      page: '@fox-zero/web:Home',
      title: 'VitruvianTech - Sentient. Secure. Quality for All.',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      sections: '["@fox-zero/web:Home", "@fox-zero/web:Missions", "@fox-zero/web:Services", "@fox-zero/web:Plans", "@fox-zero/web:Rates", "@fox-zero/web:Hosting", "@fox-zero/web:Leadership", "@fox-zero/web:Network", "@fox-zero/web:Communications", "@fox-zero/web:Headquarters"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'home(/:section)',
        page: '@fox-zero/web:Home',
        title: 'VitruvianTech - Sentient. Secure. Quality for All.',
        headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
        sections: '["@fox-zero/web:Home", "@fox-zero/web:Missions", "@fox-zero/web:Services", "@fox-zero/web:Plans", "@fox-zero/web:Rates", "@fox-zero/web:Hosting", "@fox-zero/web:Leadership", "@fox-zero/web:Network", "@fox-zero/web:Communications", "@fox-zero/web:Headquarters"]'
      }
    });
  }
}
