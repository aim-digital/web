import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/@vitruvian-tech/machete-bundle/images/favicon.png'
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
        href: '/@vitruvian-tech/machete-bundle/images/favicon.png'
      }
    });
  }
}
