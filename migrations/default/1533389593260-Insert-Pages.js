import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.create({
      route: 'maintenance',
      title: 'Long-Term Support - Maintenance - FoxZero™',
      page: '@fox-zero/web:Maintenance',
      headers: '["@fox-zero/web:Title"]',
      sections: '["@fox-zero/web:Maintenance"]'
    });

    await Page.create({
      route: 'on-demand',
      title: 'Point & Pay™ Sprint Pricing - On Demand - FoxZero™',
      page: '@fox-zero/web:OnDemand',
      headers: '["@fox-zero/web:Title"]',
      sections: '["@fox-zero/web:OnDemand"]'
    });

    await Page.update({
      route: 'subscription',
      title: 'Velocity™ Plan Pricing - Subscription - FoxZero™',
      page: '@fox-zero/web:Subscription',
      sections: '["@fox-zero/web:Subscription"]'
    }, {
      where: {
        route: 'pricing'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Process", "@fox-zero/web:Warranty", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Process", "@fox-zero/web:Warranty", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand"]'
    }, {
      where: {
        route: 'services/:section'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
