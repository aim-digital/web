import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'home(/:section)',
      page: '@vitruviantech/web:Home',
      title: 'VitruvianTech - Sentient. Secure. Quality for All.',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      sections: '["@vitruviantech/web:Home", "@vitruviantech/web:Missions", "@vitruviantech/web:Services", "@vitruviantech/web:Plans", "@vitruviantech/web:Rates", "@vitruviantech/web:Hosting", "@vitruviantech/web:Leadership", "@vitruviantech/web:Network", "@vitruviantech/web:Communications", "@vitruviantech/web:Headquarters"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'home(/:section)',
        page: '@vitruviantech/web:Home',
        title: 'VitruvianTech - Sentient. Secure. Quality for All.',
        headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
        sections: '["@vitruviantech/web:Home", "@vitruviantech/web:Missions", "@vitruviantech/web:Services", "@vitruviantech/web:Plans", "@vitruviantech/web:Rates", "@vitruviantech/web:Hosting", "@vitruviantech/web:Leadership", "@vitruviantech/web:Network", "@vitruviantech/web:Communications", "@vitruviantech/web:Headquarters"]'
      }
    });
  }
}
