import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.destroy({
      where: {
        rel: 'prefetch',
        href: '/dist/2bf241969ee53a14f4333bc1a80a2abc.jpg'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.create({
      rel: 'prefetch',
      href: '/dist/2bf241969ee53a14f4333bc1a80a2abc.jpg'
    });
  }
}
