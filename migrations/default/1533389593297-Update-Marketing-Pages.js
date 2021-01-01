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

    await Page.update({
      title: `Contact Us · ${NAME}`
    }, {
      where: {
        route: 'contact'
      }
    });

    await Page.update({
      title: `Privacy Policy · ${NAME}`
    }, {
      where: {
        route: 'privacy'
      }
    });

    route = 'about';
    title = 'Introducing SQUAD™ PLM';
    description = 'The SQUAD™ product lifecycle is our software management framework designed to prevent projects from burning through capital.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/27a51da50140413ca0de9c44d98f510f.jpg';

    await Page.update({
      title: `${title} · ${NAME}`,
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

    route = 'planning';
    title = 'Runway to Success';
    description = 'Get the first stage of your MVP off the ground with confidence by using the SQUAD™ time-boxed roadmap planning approach.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/2333b821b9104bb2ac0d62e38d7dbb97.jpg';

    await Page.update({
      title: `${title} · ${NAME}`,
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

    route = 'development';
    title = 'Guaranteed Target Delivery';
    description = 'We commit up to 4 months of guaranteed software development services as the second SQUAD™ lifecycle stage.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/b08c0d15bb08409cb6a9b7cad20e10d2.png';

    await Page.update({
      title: `${title} · ${NAME}`,
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

    route = 'support';
    title = 'Maintained Performance';
    description = 'The last stage of the SQUAD™ lifecycle is dedicated to providing on-going marketing and tech support, managed services, and continuous delivery of new features.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/04dd9f5bc99e4ea59b41d48a83690cb3.png';

    await Page.update({
      title: `${title} · ${NAME}`,
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

    route = 'subscription';
    title = 'SQUAD™ Packaged Pricing';
    description = 'Build your MVP within 6 months for under $350k with our simple monthly SQUAD™ plans.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/7d11051f875d4ff59496386500739afe.jpg';

    await Page.update({
      title: `${title} · ${NAME}`,
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
    title = 'Wingman™ Bond Protection';
    description = 'Stay covered with our Wingman™ warranty to guarantee minimum risk of project delivery time, budget, and quality so that you\'ll never be a statistic of software waste.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/218eca8dcd514c6f8aa35e8f7aa27318.jpg';

    await Page.update({
      title: `${title} · ${NAME}`,
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

    route = 'on-demand';
    title = 'Point & Pay™ Agile Pricing';
    description = "Agents are kept on standby, ready anytime you need us, on a sprint and story point basis with our Point & Pay™ plan.";
    image = 'https://s3.amazonaws.com/content.foxzero.io/6fae639325ce4ebcb766ef7881860bb6.jpg';

    await Page.update({
      title: `${title} · ${NAME}`,
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
    description = 'From web programming to project management, each of our software consultants is expertly trained in multi-role autonomy to provide zero latency between development tasks.';
    image = 'https://s3.amazonaws.com/content.foxzero.io/fd561bcc988d4fca849d74b8f812e82a.jpg';

    await Page.update({
      title: `${title} · ${NAME}`,
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
  }

  static async down(models, sequelize, DataTypes) {}
}