import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'missions',
      title: 'Our Work - VitruvianTech',
      page: '@vitruviantech/web:Missions',
      sections: '["@vitruviantech/web:Missions"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/missions"}]'
    });

    await Page.create({
      route: 'services',
      title: 'What We Do - VitruvianTech',
      page: '@vitruviantech/web:Services',
      sections: '["@vitruviantech/web:Services"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/services"}]'
    });

    await Page.create({
      route: 'rates',
      title: 'Hourly Rates - VitruvianTech',
      page: '@vitruviantech/web:Rates',
      sections: '["@vitruviantech/web:Rates"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/rates"}]'
    });

    await Page.create({
      route: 'hosting',
      title: 'Hosting - VitruvianTech',
      page: '@vitruviantech/web:Hosting',
      sections: '["@vitruviantech/web:Hosting"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/hosting"}]'
    });

    await Page.create({
      route: 'leadership',
      title: 'Who We Are - VitruvianTech',
      page: '@vitruviantech/web:Leadership',
      sections: '["@vitruviantech/web:Leadership"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/leadership"}]'
    });

    await Page.create({
      route: 'network',
      title: 'Partners - VitruvianTech',
      page: '@vitruviantech/web:Network',
      sections: '["@vitruviantech/web:Network"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/network"}]'
    });

    await Page.create({
      route: 'communications',
      title: 'Connect with Us - VitruvianTech',
      page: '@vitruviantech/web:Communications',
      sections: '["@vitruviantech/web:Communications"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://Vitruvian.Tech/home/communications"}]'
    });

    await Page.create({
      route: 'headquarters',
      title: 'Base of Operations - VitruvianTech',
      page: '@vitruviantech/web:Headquarters',
      sections: '["@vitruviantech/web:Headquarters"]',
      headers: '["@vitruviantech/web:Title", "@vitruviantech/web:Contact"]',
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
