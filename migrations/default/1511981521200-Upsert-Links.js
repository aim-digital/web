import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    models = getModels();

    await models.Link.create({
      rel: 'prefecth',
      href: '/dist/51883aaa25eec87770e2b91e169c9609.png'
    });
  }

  static async down(models, sequelize, DataTypes) {
    models = getModels();

    await models.Link.destroy({
      where: {
        rel: 'prefecth',
        href: '/dist/51883aaa25eec87770e2b91e169c9609.png'
      }
    });
  }
}
