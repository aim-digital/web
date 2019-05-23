import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Script} = getModels();

    await Script.destroy({
      where: {
        content: '(new Image()).src = \'/dist/1a0b772e416dd8e892c4969132515f17.png\';'
      }
    });

    await Script.destroy({
      where: {
        content: '(new Image()).src = \'/dist/2bf241969ee53a14f4333bc1a80a2abc.jpg\';'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Script} = getModels();

    await Script.create({
      content: '(new Image()).src = \'/dist/1a0b772e416dd8e892c4969132515f17.png\';',
      external: false
    });

    await Script.create({
      content: '(new Image()).src = \'/dist/2bf241969ee53a14f4333bc1a80a2abc.jpg\';',
      external: false
    });
  }
}
