import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page, Script} = getModels();

    await Page.update({
      meta: '[{"property":"og:url","content":"https://foxzero.io/about"},{"property":"og:image:secure_url","content":"https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg"},{"property":"og:image","content":"https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg"},{"property":"twitter:image","content":"https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg"},{"property":"twitter:image:alt","content":"Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"},{"itemprop":"name","content":"Fox Zero™ · Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"},{"property":"og:title","content":"Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"},{"property":"twitter:title","content":"Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"}]'
    }, {
      where: {
        route: 'about'
      }
    });

    await Script.destroy({
      where: {
        content: '(new Image()).src="https://d3w33imimg0eu8.cloudfront.net/images/loading-beat.gif"'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
