import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'about',
        title: 'VitruvianTech - About Us',
        page: '@vitruvian-tech/machete-bundle:About',
        headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@vitruvian-tech/machete-bundle:About"]'
      }
    });

    await Page.destroy({
      where: {
        route: 'contact',
        title: 'VitruvianTech - Contact Us',
        headers: '["@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@machete-platform/core-bundle:Contact"]'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'about',
      title: 'VitruvianTech - About Us',
      page: '@vitruvian-tech/machete-bundle:About',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      sections: '["@vitruvian-tech/machete-bundle:About"]'
    });

    await Page.create({
      route: 'contact',
      title: 'VitruvianTech - Contact Us',
      headers: '["@vitruvian-tech/machete-bundle:Contact"]',
      sections: '["@machete-platform/core-bundle:Contact"]'
    });
  }
}
