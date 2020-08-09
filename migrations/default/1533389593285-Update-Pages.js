import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Planning", "@fox-zero/web:Development", "@fox-zero/web:Support", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Warranty", "@fox-zero/web:Agents"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Planning", "@fox-zero/web:Development", "@fox-zero/web:Support", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Warranty", "@fox-zero/web:Agents"]'
    }, {
      where: {
        route: 'home/:section'
      }
    });

    await Page.update({
      route: 'support',
      page: '@fox-zero/web:Support',
      sections: '["@fox-zero/web:Support"]'
    }, {
      where: {
        route: 'performance'
      }
    });

    await Page.update({
      route: 'agents',
      page: '@fox-zero/web:Agents',
      sections: '["@fox-zero/web:Agents"]'
    }, {
      where: {
        route: 'framework'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
