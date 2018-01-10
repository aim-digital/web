import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Script} = getModels();

    await Script.update({
      content: '(new Image()).src = \'/dist/1a0b772e416dd8e892c4969132515f17.png\';'
    }, {
      where: {
        content: '(new Image()).src = \'/dist/51883aaa25eec87770e2b91e169c9609.png\';'
      }
    });

    await Script.update({
      content: '(new Image()).src = \'/dist/2bf241969ee53a14f4333bc1a80a2abc.jpg\';'
    }, {
      where: {
        content: '(new Image()).src = \'/dist/4e7af0cd1facc04162020dda7cfb0eec.jpg\';'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Script} = getModels();

    await Script.update({
      content: '(new Image()).src = \'/dist/51883aaa25eec87770e2b91e169c9609.png\';'
    }, {
      where: {
        content: '(new Image()).src = \'/dist/1a0b772e416dd8e892c4969132515f17.png\';'
      }
    });

    await Script.update({
      content: '(new Image()).src = \'/dist/4e7af0cd1facc04162020dda7cfb0eec.jpg\';'
    }, {
      where: {
        content: '(new Image()).src = \'/dist/2bf241969ee53a14f4333bc1a80a2abc.jpg\';'
      }
    });
  }
}
