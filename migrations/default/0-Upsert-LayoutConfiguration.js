import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    return await getModels().LayoutConfiguration.create({
      theme: '@vitruvian-tech/machete-bundle:default',
      app: '@machete-platform/core-bundle:App',
      PageConfigurationId: 1
    });
  }

  static async down(models, sequelize, DataTypes) {
    return await getModels().LayoutConfiguration.destroy({
      where: {
        theme: '@vitruvian-tech/machete-bundle:default',
        app: '@machete-platform/core-bundle:App'
      }
    });
  }
}
