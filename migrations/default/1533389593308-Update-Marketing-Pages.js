import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Layout, Page} = getModels();
    let route, title, description, image;

    const NAME = 'Fox Zero';
    const TAGLINE = 'Zero Latency Software Agency™'
    const SITE = 'https://foxzero.io';

    await Layout.update({
      title: `${NAME} · ${TAGLINE}`
    }, {
      where: {
        theme: '@fox-zero/web'
      }
    });

    await Page.update({
      title: `Nope! · ${NAME}`
    }, {
      where: {
        route: '*'
      }
    });

    await Page.update({
      title: `${NAME} · ${TAGLINE}`
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      title: `${NAME} · ${TAGLINE}`
    }, {
      where: {
        route: 'home/:section'
      }
    });

    route = 'about';
    title = 'Zero Latency Software Agency';
    description = 'Maximize your ROI at a fast pace without the waste when you use our zero overhead software development services.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg';

    await Page.update({
      title: `${title} · Mission`,
      meta: JSON.stringify([
        { property: 'og:url', content: `${SITE}/${route}` },
        { property: 'og:image:secure_url', content: image },
        { property: 'og:image', content: image },
        { property: 'twitter:image', content: image },
        { property: 'twitter:image:alt', content: `${title}` },
        { itemprop: 'name', content: `${NAME} · ${title}` },
        { property: 'og:title', content: `${title}` },
        { property: 'twitter:title', content: `${title}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });

    route = 'agents';
    title = 'Top Tier Engineers';
    description = 'Multi-role U.S.A.-based software consultants are the foundation of our zero latency services and values.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/288528901687426da9cead2a0a7dab49.jpg';

    await Page.update({
      title: `${title} · Agents`,
      meta: JSON.stringify([
        { property: 'og:url', content: `${SITE}/${route}` },
        { property: 'og:image:secure_url', content: image },
        { property: 'og:image', content: image },
        { property: 'twitter:image', content: image },
        { property: 'twitter:image:alt', content: `${title}` },
        { itemprop: 'name', content: `${NAME} · ${title}` },
        { property: 'og:title', content: `${title}` },
        { property: 'twitter:title', content: `${title}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });

    route = 'squad';
    title = 'Rapid, Lean Timebox Machine';
    description = "Learn to manage chaos by time-boxing rapid product development iterations with tech \"ops\" teams 3x leaner than industry standards.";
    image = 'https://s3.amazonaws.com/content.foxzero.io/c8394613925c41afa42fc9f094312a9e.jpg';

    await Page.update({
      title: `${title} · SQUAD®`,
      meta: JSON.stringify([
        { property: 'og:url', content: `${SITE}/${route}` },
        { property: 'og:image:secure_url', content: image },
        { property: 'og:image', content: image },
        { property: 'twitter:image', content: image },
        { property: 'twitter:image:alt', content: `${title}` },
        { itemprop: 'name', content: `${NAME} · ${title}` },
        { property: 'og:title', content: `${title}` },
        { property: 'twitter:title', content: `${title}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });

    route = 'packages';
    title = 'SQUAD® Pricing';
    description = 'Build, launch, and scale a premium product in 9 months for under $500k with our simple monthly budgeted pricing packages.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/7a5cad1eb076473b8175a89d411d15a0.jpg';

    await Page.update({
      title: `${title} · Packages`,
      meta: JSON.stringify([
        { property: 'og:url', content: `${SITE}/${route}` },
        { property: 'og:image:secure_url', content: image },
        { property: 'og:image', content: image },
        { property: 'twitter:image', content: image },
        { property: 'twitter:image:alt', content: `${title}` },
        { itemprop: 'name', content: `${NAME} · ${title}` },
        { property: 'og:title', content: `${title}` },
        { property: 'twitter:title', content: `${title}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });

    route = 'warranty';
    title = 'Wingman™ Protection';
    description = 'Monthly risk protection covers you for when your project needs it most. Included FREE with every product iteration we build.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/218eca8dcd514c6f8aa35e8f7aa27318.jpg';

    await Page.update({
      title: `${title} · Warranty`,
      meta: JSON.stringify([
        { property: 'og:url', content: `${SITE}/${route}` },
        { property: 'og:image:secure_url', content: image },
        { property: 'og:image', content: image },
        { property: 'twitter:image', content: image },
        { property: 'twitter:image:alt', content: `${title}` },
        { itemprop: 'name', content: `${NAME} · ${title}` },
        { property: 'og:title', content: `${title}` },
        { property: 'twitter:title', content: `${title}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });

    route = 'contact';
    title = 'Talk to Me.';
    description = 'Call or message us to start optimizing your software investment today!';
    image = 'https://s3.amazonaws.com/content.foxzero.io/e7336b23ceab4934a3218e0a1ef465e9.png';

    await Page.update({
      title: `${title} · Contact`,
      meta: JSON.stringify([
        { property: 'og:url', content: `${SITE}/${route}` },
        { property: 'og:image:secure_url', content: image },
        { property: 'og:image', content: image },
        { property: 'twitter:image', content: image },
        { property: 'twitter:image:alt', content: `${title}` },
        { itemprop: 'name', content: `${NAME} · ${title}` },
        { property: 'og:title', content: `${title}` },
        { property: 'twitter:title', content: `${title}` },
        { name: 'description', content: description },
        { itemprop: 'description', content: description },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
      ])
    }, {
      where: { route }
    });

    await Page.update({
      title: null,
      meta: null
    }, {
      where: { route: 'design' }
    });

    await Page.update({
      title: null,
      meta: null
    }, {
      where: { route: 'development' }
    });

    await Page.update({
      title: null,
      meta: null
    }, {
      where: { route: 'support' }
    });

    await Page.update({
      title: null,
      meta: null
    }, {
      where: { route: 'privacy' }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}