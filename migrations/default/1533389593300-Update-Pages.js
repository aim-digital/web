import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Agents", "@fox-zero/web:SQUAD", "@fox-zero/web:Packages", "@fox-zero/web:Warranty", "@fox-zero/web:Contact"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Agents", "@fox-zero/web:SQUAD", "@fox-zero/web:Packages", "@fox-zero/web:Warranty", "@fox-zero/web:Contact"]'
    }, {
      where: {
        route: 'home/:section'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Contact',
      headers: '["@fox-zero/web:Title"]',
      sections: '["@fox-zero/web:Contact"]'
    }, {
      where: {
        route: 'contact'
      }
    });

    await Page.update({
      route: 'squad',
      page: '@fox-zero/web:SQUAD',
      headers: '["@fox-zero/web:Title"]',
      sections: '["@fox-zero/web:SQUAD"]'
    }, {
      where: {
        route: 'on-demand'
      }
    });

    await Page.update({
      route: 'packages',
      page: '@fox-zero/web:Packages',
      headers: '["@fox-zero/web:Title"]',
      sections: '["@fox-zero/web:Packages"]'
    }, {
      where: {
        route: 'subscription'
      }
    });

    await Page.update({
      route: 'design',
      page: '@fox-zero/web:Services',
      headers: '["@fox-zero/web:Design"]',
      sections: '["@fox-zero/web:Design"]'
    }, {
      where: {
        route: 'planning'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Services',
      headers: '["@fox-zero/web:Development"]',
      sections: '["@fox-zero/web:Development"]'
    }, {
      where: {
        route: 'development'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Services',
      headers: '["@fox-zero/web:Support"]',
      sections: '["@fox-zero/web:Support"]'
    }, {
      where: {
        route: 'support'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
