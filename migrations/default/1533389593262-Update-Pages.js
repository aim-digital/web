import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Insurance", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Strategy", "@fox-zero/web:Process"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Maintenance", "@fox-zero/web:Insurance", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Strategy", "@fox-zero/web:Process"]'
    }, {
      where: {
        route: 'services/:section'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
