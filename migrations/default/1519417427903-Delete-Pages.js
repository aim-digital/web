import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'about',
        title: 'VitruvianTech - About Us',
        page: '@vitruviantech/web:About',
        headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
        sections: '["@vitruviantech/web:About"]'
      }
    });

    await Page.destroy({
      where: {
        route: 'contact',
        title: 'VitruvianTech - Contact Us',
        headers: '["@vitruviantech/web:Contact"]',
        sections: '["@boilerplatejs/core:Contact"]'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'about',
      title: 'VitruvianTech - About Us',
      page: '@vitruviantech/web:About',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      sections: '["@vitruviantech/web:About"]'
    });

    await Page.create({
      route: 'contact',
      title: 'VitruvianTech - Contact Us',
      headers: '["@vitruviantech/web:Contact"]',
      sections: '["@boilerplatejs/core:Contact"]'
    });
  }
}
