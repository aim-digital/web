import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/@vitruviantech/web/images/favicon.png'
    }, {
      where: {
        href: '/favicon.png'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/favicon.png'
    }, {
      where: {
        href: '/@vitruviantech/web/images/favicon.png'
      }
    });
  }
}
