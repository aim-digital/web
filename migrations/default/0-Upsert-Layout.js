import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    return await getModels().Layout.create({
      title: 'VitruvianTech',
      theme: '@vitruvian-tech/machete-bundle',
      app: '@machete-platform/core-bundle:App',
      page: '@vitruvian-tech/machete-bundle:Page'
    });
  }

  static async down(models, sequelize, DataTypes) {
    return await getModels().Layout.destroy({
      where: {
        title: 'VitruvianTech',
        theme: '@vitruvian-tech/machete-bundle',
        app: '@machete-platform/core-bundle:App',
        page: '@vitruvian-tech/machete-bundle:Page'
      }
    });
  }
}
