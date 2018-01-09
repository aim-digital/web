import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/dist/1a0b772e416dd8e892c4969132515f17.png'
    }, {
      where: {
        href: '/dist/623df8fdb189ee61f583f64d0dbead0c.png'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/dist/623df8fdb189ee61f583f64d0dbead0c.png'
    }, {
      where: {
        href: '/dist/1a0b772e416dd8e892c4969132515f17.png'
      }
    });
  }
}
