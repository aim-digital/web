import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Planning", "@fox-zero/web:Development", "@fox-zero/web:Performance", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Warranty", "@fox-zero/web:Framework"]'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      sections: '["@fox-zero/web:About", "@fox-zero/web:Planning", "@fox-zero/web:Development", "@fox-zero/web:Performance", "@fox-zero/web:Subscription", "@fox-zero/web:OnDemand", "@fox-zero/web:Warranty", "@fox-zero/web:Framework"]'
    }, {
      where: {
        route: 'home/:section'
      }
    });

    await Page.update({
      route: 'planning',
      page: '@fox-zero/web:Planning',
      sections: '["@fox-zero/web:Planning"]'
    }, {
      where: {
        route: 'consulting'
      }
    });

    await Page.update({
      route: 'performance',
      page: '@fox-zero/web:Performance',
      sections: '["@fox-zero/web:Performance"]'
    }, {
      where: {
        route: 'maintenance'
      }
    });

    await Page.update({
      route: 'framework',
      page: '@fox-zero/web:Framework',
      sections: '["@fox-zero/web:Framework"]'
    }, {
      where: {
        route: 'strategy'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
