import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page} = getModels();
    let route, section, title, description, image;

    const NAME = 'Fox Zero™';
    const SITE = 'https://foxzero.io';

    route = 'about';
    section = 'Mission';
    title = 'Introducing SQUAD™ PLM';
    description = 'The SQUAD™ product lifecycle is our software management consulting framework designed to help solve the industry-wide problem of $150 billion attributed to software waste annually.';
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
        { property: 'twitter:title', content: `${title} · ${section}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });

    route = 'planning';
    section = 'Planning';
    title = 'Runway to Success';
    description = 'Get off the ground with confidence using our time-boxed roadmap planning approach, allowing us to guarantee all software project milestones and affording you peace of mind.';
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
    title = 'Guaranteed Target Delivery';
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

    route = 'subscription';
    section = 'Subscription';
    title = 'SQUAD™ Packaged Pricing';
    description = 'Make project planning simpler with packaged monthly pricing. Forget the nickel-and-diming over hours. We’re bottom-line experts who know what software projects cost.';
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
    title = 'Point & Pay™ Agile Pricing';
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
    title = 'Wingman™ Bond Protection';
    description = 'Every software project that we manage is insured up to 25% of the total project price to guarantee minimum risk of delivery time, budget, and quality. Valid from kick-off until 120 days after project acceptance.';
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

    route = 'agents';
    section = 'Agents';
    title = 'Top Tier Engineers';
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
  }

  static async down(models, sequelize, DataTypes) {}
}
