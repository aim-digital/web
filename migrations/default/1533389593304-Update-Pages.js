import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      meta: null,
      title: null,
      route: 'design',
      page: '@fox-zero/web:Post',
      headers: '["@fox-zero/web:Post"]',
      sections: '["@fox-zero/web:Post"]'
    }, {
      where: {
        route: 'design'
      }
    });

    await Page.update({
      meta: null,
      title: null,
      page: '@fox-zero/web:Post',
      headers: '["@fox-zero/web:Post"]',
      sections: '["@fox-zero/web:Post"]'
    }, {
      where: {
        route: 'development'
      }
    });

    await Page.update({
      meta: null,
      title: null,
      page: '@fox-zero/web:Post',
      headers: '["@fox-zero/web:Post"]',
      sections: '["@fox-zero/web:Post"]'
    }, {
      where: {
        route: 'support'
      }
    });

    await Page.update({
      meta: null,
      title: null,
      page: '@fox-zero/web:Post',
      headers: '["@fox-zero/web:Post"]',
      sections: '["@fox-zero/web:Post"]'
    }, {
      where: {
        route: 'privacy'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
