import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();
    let route, section, title, description, image;

    const NAME = 'Fox Zero™';
    const SITE = 'https://foxzero.io';

    route = 'warranty';
    section = 'Warranty';
    title = 'Wingman™ Surety Coverage';
    description = 'Every development project we manage is insured up to 10% of the total project price to guarantee minimum risk of delivery time, budget, and quality. Valid from kick-off until 120 days after project acceptance.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/218eca8dcd514c6f8aa35e8f7aa27318.jpg';

    await Page.update({
      meta: JSON.stringify([
        { property: 'og:url', content: `${SITE}/${route}` },
        { property: 'og:image:secure_url', content: image },
        { property: 'og:image', content: image },
        { property: 'twitter:image', content: image },
        { property: 'twitter:image:alt', content: `${title} · ${section}` },
        { itemprop: 'name', content: `${NAME} · ${title} · ${section}` },
        { property: 'og:title', content: `${title} · ${section}` },
        { property: 'twitter:title', content: `${title} · ${section}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
