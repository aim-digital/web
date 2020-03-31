import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      title: 'Target Verticals & Applications · Portfolio · Fox Zero™'
    }, {
      where: {
        route: 'portfolio'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Portfolio", "@fox-zero/web:Warranty", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Maintenance"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:Consulting", "@fox-zero/web:Development", "@fox-zero/web:Strategy", "@fox-zero/web:Portfolio", "@fox-zero/web:Warranty", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Maintenance"]'
    }, {
      where: {
        route: 'home/:section'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
