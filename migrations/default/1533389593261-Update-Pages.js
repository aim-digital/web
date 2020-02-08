import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      route: 'insurance',
      title: 'Wingman™ Double Coverage - Insurance - FoxZero™',
      page: '@fox-zero/web:Insurance',
      sections: '["@fox-zero/web:Insurance"]'
    }, {
      where: {
        route: 'warranty'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Process", "@fox-zero/web:Insurance", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Strategy", "@fox-zero/web:Process", "@fox-zero/web:Insurance", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand"]'
    }, {
      where: {
        route: 'services/:section'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
