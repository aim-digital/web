import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'pricing/:section',
      title: 'FoxZero - The High-Performance/Zero-Latency Agency™',
      page: '@fox-zero/web:Home',
      headers: '["@fox-zero/web:Title"]',
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Subscription", "@fox-zero/web:Warranty", "@fox-zero/web:Process", "@fox-zero/web:OnDemand"]'
    });

    await Page.create({
      route: 'framework/:section',
      title: 'FoxZero - The High-Performance/Zero-Latency Agency™',
      page: '@fox-zero/web:Home',
      headers: '["@fox-zero/web:Title"]',
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Subscription", "@fox-zero/web:Warranty", "@fox-zero/web:Process", "@fox-zero/web:OnDemand"]'
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
