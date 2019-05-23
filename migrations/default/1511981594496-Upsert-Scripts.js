import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Script} = getModels();

    await Script.create({
      content: 'https://use.typekit.net/ftk6yva.js'
    });

    await Script.create({
      content: 'try{Typekit.load({ async: false });}catch(e){}',
      external: false
    });

    await Script.create({
      content: '(new Image()).src = \'/dist/51883aaa25eec87770e2b91e169c9609.png\';',
      external: false
    });

    await Script.create({
      content: '(new Image()).src = \'/dist/4e7af0cd1facc04162020dda7cfb0eec.jpg\';',
      external: false
    });
  }

  static async down(models, sequelize, DataTypes) {
    const {Script} = getModels();

    await Script.destroy({
      where: {
        content: 'https://use.typekit.net/ftk6yva.js'
      }
    });

    await Script.destroy({
      where: {
        content: 'try{Typekit.load({ async: false });}catch(e){}',
        external: false
      }
    });

    await Script.destroy({
      where: {
        content: '(new Image()).src = \'/dist/51883aaa25eec87770e2b91e169c9609.png\';',
        external: false
      }
    });

    await Script.destroy({
      where: {
        content: '(new Image()).src = \'/dist/4e7af0cd1facc04162020dda7cfb0eec.jpg\';',
        external: false
      }
    });
  }
}
