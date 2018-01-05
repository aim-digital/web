import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'home(/:section)',
      page: '@vitruvian-tech/machete-bundle:Home',
      title: 'VitruvianTech - Sentient. Secure. Quality for All.',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      sections: '["@vitruvian-tech/machete-bundle:Home", "@vitruvian-tech/machete-bundle:Missions", "@vitruvian-tech/machete-bundle:Services", "@vitruvian-tech/machete-bundle:Plans", "@vitruvian-tech/machete-bundle:Rates", "@vitruvian-tech/machete-bundle:Hosting", "@vitruvian-tech/machete-bundle:Leadership", "@vitruvian-tech/machete-bundle:Network", "@vitruvian-tech/machete-bundle:Communications", "@vitruvian-tech/machete-bundle:Headquarters"]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'home(/:section)',
        page: '@vitruvian-tech/machete-bundle:Home',
        title: 'VitruvianTech - Sentient. Secure. Quality for All.',
        headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@vitruvian-tech/machete-bundle:Home", "@vitruvian-tech/machete-bundle:Missions", "@vitruvian-tech/machete-bundle:Services", "@vitruvian-tech/machete-bundle:Plans", "@vitruvian-tech/machete-bundle:Rates", "@vitruvian-tech/machete-bundle:Hosting", "@vitruvian-tech/machete-bundle:Leadership", "@vitruvian-tech/machete-bundle:Network", "@vitruvian-tech/machete-bundle:Communications", "@vitruvian-tech/machete-bundle:Headquarters"]'
      }
    });
  }
}
