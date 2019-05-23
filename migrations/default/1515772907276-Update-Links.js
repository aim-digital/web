import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/@vitruviantech/web/images/insignia.png'
    }, {
      where: {
        href: '/dist/1a0b772e416dd8e892c4969132515f17.png'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Link} = getModels();

    await Link.update({
      href: '/dist/1a0b772e416dd8e892c4969132515f17.png'
    }, {
      where: {
        href: '/@vitruviantech/web/images/insignia.png'
      }
    });
  }
}
