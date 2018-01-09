import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'missions',
      title: 'Our Work - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Missions',
      sections: '["@vitruvian-tech/machete-bundle:Missions"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/missions"}]'
    });

    await Page.create({
      route: 'services',
      title: 'What We Do - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Services',
      sections: '["@vitruvian-tech/machete-bundle:Services"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/services"}]'
    });

    await Page.create({
      route: 'rates',
      title: 'Hourly Rates - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Rates',
      sections: '["@vitruvian-tech/machete-bundle:Rates"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/rates"}]'
    });

    await Page.create({
      route: 'hosting',
      title: 'Hosting - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Hosting',
      sections: '["@vitruvian-tech/machete-bundle:Hosting"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/hosting"}]'
    });

    await Page.create({
      route: 'leadership',
      title: 'Who We Are - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Leadership',
      sections: '["@vitruvian-tech/machete-bundle:Leadership"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/leadership"}]'
    });

    await Page.create({
      route: 'network',
      title: 'Partners - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Network',
      sections: '["@vitruvian-tech/machete-bundle:Network"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/network"}]'
    });

    await Page.create({
      route: 'communications',
      title: 'Connect with Us - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Communications',
      sections: '["@vitruvian-tech/machete-bundle:Communications"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/communications"}]'
    });

    await Page.create({
      route: 'headquarters',
      title: 'Base of Operations - VitruvianTech',
      page: '@vitruvian-tech/machete-bundle:Headquarters',
      sections: '["@vitruvian-tech/machete-bundle:Headquarters"]',
      headers: '["@vitruvian-tech/machete-bundle:Title", "@vitruvian-tech/machete-bundle:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/headquarters"}]'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.destroy({
      where: {
        route: 'missions'
      }
    });

    await Page.destroy({
      where: {
        route: 'services'
      }
    });

    await Page.destroy({
      where: {
        route: 'rates'
      }
    });

    await Page.destroy({
      where: {
        route: 'hosting'
      }
    });

    await Page.destroy({
      where: {
        route: 'leadership'
      }
    });

    await Page.destroy({
      where: {
        route: 'network'
      }
    });

    await Page.destroy({
      where: {
        route: 'communications'
      }
    });

    await Page.destroy({
      where: {
        route: 'headquarters'
      }
    });
  }
}
