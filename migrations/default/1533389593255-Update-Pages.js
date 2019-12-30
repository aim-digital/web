import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      page: '@fox-zero/web:Services'
    }, {
      where: {
        route: 'services'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Value'
    }, {
      where: {
        route: 'value'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Strategy'
    }, {
      where: {
        route: 'strategy'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Process'
    }, {
      where: {
        route: 'process'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Warranty'
    }, {
      where: {
        route: 'warranty'
      }
    });

    await Page.update({
      page: '@fox-zero/web:Pricing'
    }, {
      where: {
        route: 'pricing'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
