import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Warranty", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Maintenance"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Warranty", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Maintenance"]'
    }, {
      where: {
        route: 'home/:section'
      }
    });

    await Page.destroy({
      where: {
        route: 'portfolio'
      }
    });

    await Page.update({
      title: 'Speed, Accuracy, Value. Repeat. · Fox Zero™',
      page: '@fox-zero/web:About',
      headers: '["@fox-zero/web:Title"]',
      meta: '[{"property":"og:url","content":"https://foxzero.io/about"},{"property":"og:image:secure_url","content":"https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg"},{"property":"og:image","content":"https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg"},{"property":"twitter:image","content":"https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg"},{"property":"twitter:image:alt","content":"Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"},{"itemprop":"name","content":"Fox Zero™ · Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"},{"property":"og:title","content":"Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"},{"property":"twitter:title","content":"Speed, Accuracy, Value. Repeat. · Zero Latency Software Consultancy™"},{"name":"description","content":"Our software consulting and digital agency services combine zero-latency development tactics with versatile talent as simple monthly subscriptions to enhance project accuracy and morale, reducing complexity and waste."},{"itemprop":"description","content":"Our software consulting and digital agency services combine zero-latency development tactics with versatile talent as simple monthly subscriptions to enhance project accuracy and morale, reducing complexity and waste."},{"property":"og:description","content":"Our software consulting and digital agency services combine zero-latency development tactics with versatile talent as simple monthly subscriptions to enhance project accuracy and morale, reducing complexity and waste."},{"property":"twitter:description","content":"Our software consulting and digital agency services combine zero-latency development tactics with versatile talent as simple monthly subscriptions to enhance project accuracy and morale, reducing complexity and waste."}]'
    }, {
      where: {
        route: 'about'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
