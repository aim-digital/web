import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    try {
        await Layout.update({
          enabled: false
        }, {
        where: {
            title: 'BoilerplateJS™ - App Development Platform'
        }
        });
    } catch (e) {}

    await Layout.update({
      enabled: true
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Layout} = getModels();

    try {
        await Layout.update({
          enabled: true
        }, {
        where: {
            title: 'BoilerplateJS™ - App Development Platform'
        }
        });
    } catch (e) {}

    await Layout.update({
      enabled: false
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });
  }
}
