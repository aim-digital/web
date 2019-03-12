import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      route: 'tv/:title/:date/:id'
    }, {
      where: {
        route: 'post/:title/:date/:id'
      }
    });

    await Page.update({
      route: 'tv(/:collection)'
    }, {
      where: {
        route: 'posts(/:collection)'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      route: 'post/:title/:date/:id'
    }, {
      where: {
        route: 'tv/:title/:date/:id'
      }
    });

    await Page.update({
      route: 'posts(/:collection)'
    }, {
      where: {
        route: 'tv(/:collection)'
      }
    });
  }
}
