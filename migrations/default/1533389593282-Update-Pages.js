import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Warranty", "@fox-zero/web:Maintenance"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Warranty", "@fox-zero/web:Maintenance"]'
    }, {
      where: {
        route: 'home/:section'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
