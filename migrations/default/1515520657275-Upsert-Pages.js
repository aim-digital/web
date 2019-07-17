import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'missions',
      title: 'Our Work - VitruvianTech',
      page: '@aim-digital/web:Missions',
      sections: '["@aim-digital/web:Missions"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/missions"}]'
    });

    await Page.create({
      route: 'services',
      title: 'What We Do - VitruvianTech',
      page: '@aim-digital/web:Services',
      sections: '["@aim-digital/web:Services"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/services"}]'
    });

    await Page.create({
      route: 'rates',
      title: 'Hourly Rates - VitruvianTech',
      page: '@aim-digital/web:Rates',
      sections: '["@aim-digital/web:Rates"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/rates"}]'
    });

    await Page.create({
      route: 'hosting',
      title: 'Hosting - VitruvianTech',
      page: '@aim-digital/web:Hosting',
      sections: '["@aim-digital/web:Hosting"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/hosting"}]'
    });

    await Page.create({
      route: 'leadership',
      title: 'Who We Are - VitruvianTech',
      page: '@aim-digital/web:Leadership',
      sections: '["@aim-digital/web:Leadership"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/leadership"}]'
    });

    await Page.create({
      route: 'network',
      title: 'Partners - VitruvianTech',
      page: '@aim-digital/web:Network',
      sections: '["@aim-digital/web:Network"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/network"}]'
    });

    await Page.create({
      route: 'communications',
      title: 'Connect with Us - VitruvianTech',
      page: '@aim-digital/web:Communications',
      sections: '["@aim-digital/web:Communications"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/communications"}]'
    });

    await Page.create({
      route: 'headquarters',
      title: 'Base of Operations - VitruvianTech',
      page: '@aim-digital/web:Headquarters',
      sections: '["@aim-digital/web:Headquarters"]',
      headers: '["@aim-digital/web:Title", "@aim-digital/web:Contact"]',
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
