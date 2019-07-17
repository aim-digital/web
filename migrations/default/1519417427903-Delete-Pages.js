import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'about',
        title: 'VitruvianTech - About Us',
        page: '@aim-digital/web:About',
        headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
        sections: '["@aim-digital/web:About"]'
      }
    });

    await Page.destroy({
      where: {
        route: 'contact',
        title: 'VitruvianTech - Contact Us',
        headers: '["@aim-digital/web:Contact"]',
        sections: '["@boilerplatejs/core:Contact"]'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'about',
      title: 'VitruvianTech - About Us',
      page: '@aim-digital/web:About',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      sections: '["@aim-digital/web:About"]'
    });

    await Page.create({
      route: 'contact',
      title: 'VitruvianTech - Contact Us',
      headers: '["@aim-digital/web:Contact"]',
      sections: '["@boilerplatejs/core:Contact"]'
    });
  }
}
