import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page, MetaTag} = getModels();
    let route, section, title, description, image;

    const NAME = 'Fox Zero™';
    const SITE = 'https://foxzero.io';
    const DESCRIPTION = 'Speed, value, accuracy, and iteration are the core mission themes applied through our software consulting services to guard against software waste.';

    await MetaTag.update({
      content: DESCRIPTION
    }, {
      where: { value: 'description', key: 'name' }
    });

    await MetaTag.update({
      content: DESCRIPTION
    }, {
      where: { value: 'description', key: 'itemprop' }
    });

    await MetaTag.update({
      content: DESCRIPTION
    }, {
      where: { value: 'og:description' }
    });

    await MetaTag.update({
      content: DESCRIPTION
    }, {
      where: { value: 'twitter:description' }
    });

    route = 'about';
    section = 'Mission';
    title = 'Introducing FAST™ PLM';
    image = 'https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg';

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
        { property: 'twitter:title', content: `${title} · ${section}` }
      ])
    }, {
      where: { route }
    });

    route = 'planning';
    section = 'Planning';
    title = 'Accelerated Roadmapping';
    description = 'All of our remote consultants are universally trained in every aspect of digital development and management. Integrating our multi-role experts within your team means more speed and up to 30% less cost for you.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/2333b821b9104bb2ac0d62e38d7dbb97.jpg';

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

    route = 'development';
    section = 'Development';
    title = '100% Power Every Hour';
    description = 'Stop the churn by letting us manage, and guarantee, your entire project. From conception to production, with a focus on UX, our strategy and warranty ensures that you’ll never be a statistic of software waste.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/b08c0d15bb08409cb6a9b7cad20e10d2.png';

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

    route = 'performance';
    section = 'Performance';
    title = 'Tune, Tweak, Support, Succeed.';
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

    route = 'subscription';
    section = 'Subscription';
    title = 'Velocity™ Plan Pricing';
    description = 'No more nickel-and-diming over hours. We’re bottom-line thinkers who know what projects cost, and know what motivates staff. Why not make project planning simpler while retaining happier talented workers?';
    image = 'https://s3.amazonaws.com/content.foxzero.io/7d11051f875d4ff59496386500739afe.jpg';

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

    route = 'on-demand';
    section = 'On Demand';
    title = 'Point & Pay™ Sprint Pricing';
    description = "For a small monthly fee, senior consultants can be retained within your team and activated as needed with a surcharge on each Agile point delivered and verified. Includes up to 10 hours of consulting per month.";
    image = 'https://s3.amazonaws.com/content.foxzero.io/6fae639325ce4ebcb766ef7881860bb6.jpg';

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

    route = 'warranty';
    section = 'Warranty';
    title = 'Wingman™ Surety Coverage';
    description = 'Every development project that we manage is insured up to 25% of the total project price to guarantee minimum risk of delivery time, budget, and quality. Valid from kick-off until 120 days after project acceptance.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/218eca8dcd514c6f8aa35e8f7aa27318.jpg';

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

    route = 'framework';
    section = 'Framework';
    title = 'Speed, Value, Accuracy. Repeat.';
    description = 'Adopted from the automotive industry, our strategy is built on a curated Agile product lifecycle framework. Paired with military-based day-to-day processes, real cost savings are met with real-time collaboration.';
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
  }

  static async down(models, sequelize, DataTypes) {}
}
