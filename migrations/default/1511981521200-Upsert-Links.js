import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.create({
      rel: 'prefetch',
      href: '/dist/51883aaa25eec87770e2b91e169c9609.png'
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.destroy({
      where: {
        rel: 'prefetch',
        href: '/dist/51883aaa25eec87770e2b91e169c9609.png'
      }
    });
  }
}
