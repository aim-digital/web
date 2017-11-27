import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    return await getModels().Layout.create({
      theme: '@vitruvian-tech/machete-bundle:default',
      app: '@machete-platform/core-bundle:App'
    });
  }

  static async down(models, sequelize, DataTypes) {
    return await getModels().Layout.destroy({
      where: {
        theme: '@vitruvian-tech/machete-bundle:default',
        app: '@machete-platform/core-bundle:App'
      }
    });
  }
}
