import {getModels} from '@machete-platform/core-bundle/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    models = getModels();

    await models.MetaTag.create({
      key: 'name',
      value: 'description',
      content: 'The Digital Special Forces for custom software and marketing solutions. Based in NYC, Vitruvian Technology, Corp. specializes in Web/Software Development, Marketing, Design, QA, Studio Production, Sourcing, IT/System Administration, Security, and Investigatory services.'
    });

    await models.MetaTag.create({
      key: 'name',
      value: 'keywords',
      content: 'VitruvianTech, Vitruvian Tech, Vitruvian Technology, Vitruvian Technology Corp., Long Island City, NYC, New York, Machete App Theming Platform, CMS, content management system, economical, custom, web development, web design, web, software, development, design, marketing, studio, production, sourcing, IT/system administration, security, investigatory, services, solutions, consulting, digital, special, forces, agency, digital special forces agency, VitruvianTechHQ, Peter C. Romano'
    });

    await models.MetaTag.create({
      key: 'name',
      value: 'robots',
      content: 'index,follow'
    });

    await models.MetaTag.create({
      key: 'name',
      value: 'theme-color',
      content: '#080808'
    });

    await models.MetaTag.create({
      key: 'name',
      value: 'google-site-verification',
      content: 'Q2VPruTR5TqMZbptXFiJZd2wPag6crUFNmLGgijJN0w'
    });

    await models.MetaTag.create({
      key: 'itemprop',
      value: 'name',
      content: 'VitruvianTech'
    });

    await models.MetaTag.create({
      key: 'itemprop',
      value: 'description',
      content: 'Sentient. Secure. Quality for All.'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:site_name',
      content: 'VitruvianTech'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:url',
      content: 'http://Vitruvian.Tech'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:type',
      content: 'website'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:locale',
      content: 'en_US'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:title',
      content: 'Sentient. Secure. Quality for All.'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:description',
      content: 'The Digital Special Forces for custom software and marketing solutions. Based in NYC, Vitruvian Technology, Corp. specializes in Web/Software Development, Marketing, Design, QA, Studio Production, Sourcing, IT/System Administration, Security, and Investigatory services.'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:site',
      content: '@VitruvianTechHQ'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:creator',
      content: '@VitruvianTechHQ'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:image',
      content: 'http://vitruvian.tech/assets/images/cover.jpg'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:image:width',
      content: '1200'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:image:height',
      content: '630'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'og:image:type',
      content: 'image/png'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'twitter:card',
      content: 'summary'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'twitter:site',
      content: '@VitruvianTechHQ'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'twitter:title',
      content: 'VitruvianTech'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'twitter:description',
      content: 'Sentient. Secure. Quality for All.'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'twitter:creator',
      content: '@VitruvianTechHQ'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'twitter:image',
      content: 'http://vitruvian.tech/assets/images/cover.jpg'
    });

    await models.MetaTag.create({
      key: 'property',
      value: 'twitter:image:alt',
      content: 'Sentient. Secure. Quality for All.'
    });
  }

  static async down(models, sequelize, DataTypes) {
    models = getModels();

    await models.MetaTag.destroy({
      where: {
        key: 'name',
        value: 'description',
        content: 'The Digital Special Forces for custom software and marketing solutions. Based in NYC, Vitruvian Technology, Corp. specializes in Web/Software Development, Marketing, Design, QA, Studio Production, Sourcing, IT/System Administration, Security, and Investigatory services.'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'name',
        value: 'keywords',
        content: 'VitruvianTech, Vitruvian Tech, Vitruvian Technology, Vitruvian Technology Corp., Long Island City, NYC, New York, Machete App Theming Platform, CMS, content management system, economical, custom, web development, web design, web, software, development, design, marketing, studio, production, sourcing, IT/system administration, security, investigatory, services, solutions, consulting, digital, special, forces, agency, digital special forces agency, VitruvianTechHQ, Peter C. Romano'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'name',
        value: 'robots',
        content: 'index,follow'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'name',
        value: 'theme-color',
        content: '#080808'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'name',
        value: 'google-site-verification',
        content: 'Q2VPruTR5TqMZbptXFiJZd2wPag6crUFNmLGgijJN0w'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'itemprop',
        value: 'name',
        content: 'VitruvianTech'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'itemprop',
        value: 'description',
        content: 'Sentient. Secure. Quality for All.'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:site_name',
        content: 'VitruvianTech'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:url',
        content: 'http://Vitruvian.Tech'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:type',
        content: 'website'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:locale',
        content: 'en_US'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:title',
        content: 'Sentient. Secure. Quality for All.'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:description',
        content: 'The Digital Special Forces for custom software and marketing solutions. Based in NYC, Vitruvian Technology, Corp. specializes in Web/Software Development, Marketing, Design, QA, Studio Production, Sourcing, IT/System Administration, Security, and Investigatory services.'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:site',
        content: '@VitruvianTechHQ'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:creator',
        content: '@VitruvianTechHQ'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:image',
        content: 'http://vitruvian.tech/assets/images/cover.jpg'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:image:width',
        content: '1200'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:image:height',
        content: '630'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'og:image:type',
        content: 'image/png'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'twitter:card',
        content: 'summary'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'twitter:site',
        content: '@VitruvianTechHQ'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'twitter:title',
        content: 'VitruvianTech'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'twitter:description',
        content: 'Sentient. Secure. Quality for All.'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'twitter:creator',
        content: '@VitruvianTechHQ'
      }
    });

    await models.MetaTag.destroy({
      where: {
        key: 'property',
        value: 'twitter:image',
        content: 'http://vitruvian.tech/assets/images/cover.jpg'
      }
    });

    await models.MetaTag.destroy({
      where: {
      key: 'property',
      value: 'twitter:image:alt',
      content: 'Sentient. Secure. Quality for All.'
      }
    });
  }
}
