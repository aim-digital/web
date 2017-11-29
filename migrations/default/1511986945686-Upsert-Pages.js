import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    models = getModels();

    await models.Page.create({
      route: '/',
      title: 'VitruvianTech - Sentient. Secure. Quality for All.',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]'
    });

    await models.Page.create({
      route: 'contact',
      title: 'VitruvianTech - Contact Us',
      headers: '["@vitruvian-tech/machete-bundle:Contact"]',
      sections: '["@machete-platform/core-bundle:Contact"]'
    });

    await models.Page.create({
      route: 'about',
      title: 'VitruvianTech - About Us',
      page: '@vitruvian-tech/machete-bundle:About',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      sections: '["@vitruvian-tech/machete-bundle:About"]'
    });

    await models.Page.create({
      route: 'post/:title/:date/:id',
      page: '@vitruvian-tech/machete-bundle:Post',
      headers: '["@vitruvian-tech/machete-bundle:Post"]',
      sections: '["@vitruvian-tech/machete-bundle:Post"]'
    });

    await models.Page.create({
      route: 'login',
      title: 'VitruvianTech - Login',
      sections: '["@machete-platform/core-bundle:Login"]'
    });

    await models.Page.create({
      route: 'dashboard',
      title: 'VitruvianTech - Dashboard',
      sections: '["@machete-platform/core-bundle:Dashboard"]',
      auth: true
    });

    await models.Page.create({
      route: 'chat',
      title: 'VitruvianTech - Chat',
      page: '@machete-platform/demo-bundle:Chat',
      sections: '["@machete-platform/demo-bundle:Chat"]',
      auth: true
    });

    await models.Page.create({
      route: 'survey',
      title: 'VitruvianTech - Survey',
      page: '@machete-platform/demo-bundle:Survey',
      sections: '["@machete-platform/demo-bundle:Survey"]'
    });

    await models.Page.create({
      route: 'widgets',
      title: 'VitruvianTech - Widgets',
      page: '@machete-platform/demo-bundle:Widgets',
      sections: '["@machete-platform/demo-bundle:Widgets"]'
    });

    await models.Page.create({
      route: 'soundcloud/download',
      title: 'VitruvianTech - SoundCloud Downloader',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      sections: '["@soundcloud-downloader/machete-bundle:Download"]'
    });

    await models.Page.create({
      route: '*',
      title: 'VitruvianTech - Error',
      sections: '["@machete-platform/core-bundle:Error"]',
      status: 404
    });
  }

  static async down(models, sequelize, DataTypes) {
    models = getModels();

    await models.Page.destroy({
      where: {
        route: '/',
        title: 'VitruvianTech - Sentient. Secure. Quality for All.',
        headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: 'contact',
        title: 'VitruvianTech - Contact Us',
        headers: '["@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@machete-platform/core-bundle:Contact"]'
      }
    });

    await models.Page.destroy({
      where: {
      route: 'about',
        title: 'VitruvianTech - About Us',
        page: '@vitruvian-tech/machete-bundle:About',
        headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@vitruvian-tech/machete-bundle:About"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: 'about',
        title: 'VitruvianTech - About Us',
        page: '@vitruvian-tech/machete-bundle:About',
        headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@vitruvian-tech/machete-bundle:About"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: 'post/:title/:date/:id',
        page: '@vitruvian-tech/machete-bundle:Post',
        headers: '["@vitruvian-tech/machete-bundle:Post"]',
        sections: '["@vitruvian-tech/machete-bundle:Post"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: 'login',
        title: 'VitruvianTech - Login',
        sections: '["@machete-platform/core-bundle:Login"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: 'dashboard',
        title: 'VitruvianTech - Dashboard',
        sections: '["@machete-platform/core-bundle:Dashboard"]',
        auth: true
      }
    });

    await models.Page.destroy({
      where: {
        route: 'chat',
        title: 'VitruvianTech - Chat',
        page: '@machete-platform/demo-bundle:Chat',
        sections: '["@machete-platform/demo-bundle:Chat"]',
        auth: true
      }
    });

    await models.Page.destroy({
      where: {
        route: 'survey',
        title: 'VitruvianTech - Survey',
        page: '@machete-platform/demo-bundle:Survey',
        sections: '["@machete-platform/demo-bundle:Survey"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: 'widgets',
        title: 'VitruvianTech - Widgets',
        page: '@machete-platform/demo-bundle:Widgets',
        sections: '["@machete-platform/demo-bundle:Widgets"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: 'soundcloud/download',
        title: 'VitruvianTech - SoundCloud Downloader',
        headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
        sections: '["@soundcloud-downloader/machete-bundle:Download"]'
      }
    });

    await models.Page.destroy({
      where: {
        route: '*',
        title: 'VitruvianTech - Error',
        sections: '["@machete-platform/core-bundle:Error"]',
        status: 404
      }
    });
  }
}
