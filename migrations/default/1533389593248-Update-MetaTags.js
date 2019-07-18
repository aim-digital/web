import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {MetaTag} = getModels();

    await MetaTag.update({
      content: 'AIM, AIM™, AIMDigitalTV, digital media, digital agency, media agency, American Interactive Media, American Interactive Media, VitruvianTech, Vitruvian Tech, Vitruvian Technology, Vitruvian Technology Corp., Long Island City, NYC, New York, BoilerplateJS™, App Development Platform, project management, tactical project management, custom software, app development, web design, software development, web development, ui design, ux design, marketing, seo, content production, quality assurance, system administration, aimdigital.media, aim-digital, Peter C. Romano'
    }, {
      where: {
        key: 'name',
        value: 'keywords'
      }
    });

    await MetaTag.update({
      content: 'Dreaming of a project or app to put you on the map? Make your digital dream a reality with AIM\'s guaranteed software, design, innovation, and marketing services. Whether simple or complex, AIM™ for the best.'
    }, {
      where: {
        key: 'name',
        value: 'description'
      }
    });

    await MetaTag.update({
      content: 'AIM™'
    }, {
      where: {
        key: 'itemprop',
        value: 'name'
      }
    });

    await MetaTag.update({
      content: 'American Interactive Media'
    }, {
      where: {
        key: 'itemprop',
        value: 'description'
      }
    });

    await MetaTag.update({
      content: 'AIM™'
    }, {
      where: {
        key: 'property',
        value: 'og:site_name'
      }
    });

    await MetaTag.update({
      content: 'https://aimdigital.media'
    }, {
      where: {
        key: 'property',
        value: 'og:url'
      }
    });

    await MetaTag.update({
      content: 'American Interactive Media'
    }, {
      where: {
        key: 'property',
        value: 'og:title'
      }
    });

    await MetaTag.update({
      content: 'Dreaming of a project or app to put you on the map? Make your digital dream a reality with AIM\'s guaranteed software, design, innovation, and marketing services. Whether simple or complex, AIM™ for the best.'
    }, {
      where: {
        key: 'property',
        value: 'og:description'
      }
    });

    await MetaTag.update({
      content: '@AIMDigitalTV'
    }, {
      where: {
        key: 'property',
        value: 'og:site'
      }
    });

    await MetaTag.update({
      content: '@AIMDigitalTV'
    }, {
      where: {
        key: 'property',
        value: 'og:creator'
      }
    });

    await MetaTag.update({
      content: 'https://aimdigital.media/@aim-digital/web/images/logo.png'
    }, {
      where: {
        key: 'property',
        value: 'og:image:secure_url'
      }
    });

    await MetaTag.update({
      content: '256'
    }, {
      where: {
        key: 'property',
        value: 'og:image:width'
      }
    });

    await MetaTag.update({
      content: '256'
    }, {
      where: {
        key: 'property',
        value: 'og:image:height'
      }
    });

    await MetaTag.update({
      content: '@AIMDigitalTV'
    }, {
      where: {
        key: 'property',
        value: 'twitter:site'
      }
    });

    await MetaTag.update({
      content: '@AIMDigitalTV'
    }, {
      where: {
        key: 'property',
        value: 'twitter:creator'
      }
    });

    await MetaTag.update({
      content: 'AIM™'
    }, {
      where: {
        key: 'property',
        value: 'twitter:title'
      }
    });

    await MetaTag.update({
      content: 'American Interactive Media'
    }, {
      where: {
        key: 'property',
        value: 'twitter:description'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
