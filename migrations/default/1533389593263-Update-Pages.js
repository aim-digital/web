import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      route: 'warranty',
      title: 'Wingman™ Double Coverage - Warranty - FoxZero™',
      page: '@fox-zero/web:Warranty',
      sections: '["@fox-zero/web:Warranty"]'
    }, {
      where: {
        route: 'insurance'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Subscription", "@fox-zero/web:Warranty", "@fox-zero/web:Process", "@fox-zero/web:OnDemand"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Subscription", "@fox-zero/web:Warranty", "@fox-zero/web:Process", "@fox-zero/web:OnDemand"]'
    }, {
      where: {
        route: 'services/:section'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
