import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();
  }

  static async down(models, sequelize, DataTypes) {
    const {Page} = getModels();
  }
}
