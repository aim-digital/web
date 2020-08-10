import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();
    let route, section, title, description, image;

    const NAME = 'Fox Zero™';
    const SITE = 'https://foxzero.io';

    route = 'support';
    section = 'Support';
    title = 'Maintained Performance';
    description = "We offer secure at-cost cloud hosting during development, as well as post-project LTS and monitoring for a nominal fee per server per month, managed by our certified industry-leading cloud consultants.";
    image = 'https://s3.amazonaws.com/content.foxzero.io/04dd9f5bc99e4ea59b41d48a83690cb3.jpg';

    await Page.update({
      title: `${title} · ${section} · Fox Zero™`,
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

    route = 'agents';
    section = 'Agents';
    title = 'Top Tier Consulting';
    description = 'All of our remote consultants are universally trained in every aspect of digital development and management.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/fd561bcc988d4fca849d74b8f812e82a.jpg';

    await Page.update({
      title: `${title} · ${section} · Fox Zero™`,
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

    await Page.update({
      route: 'support',
      page: '@fox-zero/web:Help'
    }, {
      where: {
        route: 'contact'
      }
    });

    await Page.update({
      route: 'agents',
      page: '@fox-zero/web:Help'
    }, {
      where: {
        route: 'privacy'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
