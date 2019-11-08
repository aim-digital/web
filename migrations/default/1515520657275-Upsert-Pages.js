import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'missions',
      title: 'Our Work - VitruvianTech',
      page: '@fox-zero/web:Missions',
      sections: '["@fox-zero/web:Missions"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/missions"}]'
    });

    await Page.create({
      route: 'services',
      title: 'What We Do - VitruvianTech',
      page: '@fox-zero/web:Services',
      sections: '["@fox-zero/web:Services"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/services"}]'
    });

    await Page.create({
      route: 'rates',
      title: 'Hourly Rates - VitruvianTech',
      page: '@fox-zero/web:Rates',
      sections: '["@fox-zero/web:Rates"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/rates"}]'
    });

    await Page.create({
      route: 'hosting',
      title: 'Hosting - VitruvianTech',
      page: '@fox-zero/web:Hosting',
      sections: '["@fox-zero/web:Hosting"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/hosting"}]'
    });

    await Page.create({
      route: 'leadership',
      title: 'Who We Are - VitruvianTech',
      page: '@fox-zero/web:Leadership',
      sections: '["@fox-zero/web:Leadership"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/leadership"}]'
    });

    await Page.create({
      route: 'network',
      title: 'Partners - VitruvianTech',
      page: '@fox-zero/web:Network',
      sections: '["@fox-zero/web:Network"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/network"}]'
    });

    await Page.create({
      route: 'communications',
      title: 'Connect with Us - VitruvianTech',
      page: '@fox-zero/web:Communications',
      sections: '["@fox-zero/web:Communications"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/communications"}]'
    });

    await Page.create({
      route: 'headquarters',
      title: 'Base of Operations - VitruvianTech',
      page: '@fox-zero/web:Headquarters',
      sections: '["@fox-zero/web:Headquarters"]',
      headers: '["@fox-zero/web:Title", "@fox-zero/web:Contact"]',
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
