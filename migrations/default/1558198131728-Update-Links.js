import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/@vitruvian-tech/machete-bundle/images/favicon.png'
    }, {
      where: {
        rel: 'shortcut icon'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/@machete-platform/core-bundle/images/favicon.png'
    }, {
      where: {
        rel: 'shortcut icon'
      }
    });
  }
}
