import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      route: 'consulting',
      title: '100% Power Every Hour - Consulting - FoxZero™',
      page: '@fox-zero/web:Consulting',
      sections: '["@fox-zero/web:Consulting"]'
    }, {
      where: {
        route: 'value'
      }
    });

    await Page.update({
      route: 'development',
      title: 'Full Service Digital Agency - Development - FoxZero™',
      page: '@fox-zero/web:Development',
      sections: '["@fox-zero/web:Development"]'
    }, {
      where: {
        route: 'services'
      }
    });

    await Page.update({
      title: 'FoxZero - The High Performance/Zero Latency Agency™',
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Process", "@fox-zero/web:Warranty", "@fox-zero/web:Pricing"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      route: 'services/:section',
      title: 'FoxZero - The High Performance/Zero Latency Agency™',
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Process", "@fox-zero/web:Warranty", "@fox-zero/web:Pricing"]'
    }, {
      where: {
        route: 'digital-agency/:section'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
