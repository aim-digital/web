import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Page, Layout} = getModels();

    await Layout.update({
      title: 'American Interactive Media - AIM™'
    }, {
      where: {
        title: 'VitruvianTech'
      }
    });

    await Page.update({
      title: 'American Interactive Media - AIM™'
    }, {
      where: {
        route: '/'
      }
    });

    await Page.update({
      title: 'American Interactive Media - AIM™'
    }, {
      where: {
        route: 'home(/:section)'
      }
    });

    await Page.update({
      title: 'Nope! - AIM™'
    }, {
      where: {
        route: '*'
      }
    });

    await Page.update({
      title: 'Contact - AIM™',
      meta: '[{"name":"description","content":"Connect with us today, so we can start building your dream project."},{"property":"og:description","content":"Connect with us today, so we can start building your dream project."},{"property":"twitter:description","content":"Connect with us today, so we can start building your dream project."},{"property":"og:url","content":"http://aimdigital.media/communications"}]'
    }, {
      where: {
        route: 'communications'
      }
    });

    await Page.update({
      title: 'Office - AIM™',
      meta: '[{"name":"description","content":"We operate globally, but our heart is in NYC, based in booming Long Island City."},{"property":"og:description","content":"We operate globally, but our heart is in NYC, based in booming Long Island City."},{"property":"twitter:description","content":"We operate globally, but our heart is in NYC, based in booming Long Island City."},{"property":"og:url","content":"http://aimdigital.media/headquarters"}]'
    }, {
      where: {
        route: 'headquarters'
      }
    });

    await Page.update({
      title: 'Hosting - AIM™',
      meta: '[{"name":"description","content":"Learn about our hosting packages."},{"property":"og:description","content":"Learn about our hosting packages."},{"property":"twitter:description","content":"Learn about our hosting packages."},{"property":"og:url","content":"http://aimdigital.media/hosting"}]'
    }, {
      where: {
        route: 'hosting'
      }
    });

    await Page.update({
      title: 'Who We Are - AIM™',
      meta: '[{"name":"description","content":"Learn about who we are, and our message."},{"property":"og:description","content":"Learn about who we are, and our message."},{"property":"twitter:description","content":"Learn about who we are, and our message."},{"property":"og:url","content":"http://aimdigital.media/leadership"}]'
    }, {
      where: {
        route: 'leadership'
      }
    });

    await Page.update({
      title: 'Work - AIM™',
      meta: '[{"name":"description","content":"Learn about our work and past missions."},{"property":"og:description","content":"Learn about our work and past missions."},{"property":"twitter:description","content":"Learn about our work and past missions."},{"property":"og:url","content":"http://aimdigital.media/missions"}]'
    }, {
      where: {
        route: 'missions'
      }
    });

    await Page.update({
      title: 'Partners - AIM™',
      meta: '[{"name":"description","content":"Wanna be a part of the AIM™ family? Check out our partners and come join us in our mission."},{"property":"og:description","content":"Wanna be a part of the AIM™ family? Check out our partners and come join us in our mission."},{"property":"twitter:description","content":"Wanna be a part of the AIM™ family? Check out our partners and come join us in our mission."},{"property":"og:url","content":"http://aimdigital.media/network"}]'
    }, {
      where: {
        route: 'network'
      }
    });

    await Page.update({
      title: 'Plans - AIM™',
      meta: '[{"name":"description","content":"Learn about our flexible plans and economical product offerings."},{"property":"og:description","content":"Learn about our flexible plans and economical product offerings."},{"property":"twitter:description","content":"Learn about our flexible plans and economical product offerings."},{"property":"og:url","content":"http://aimdigital.media/plans"}]'
    }, {
      where: {
        route: 'plans'
      }
    });

    await Page.update({
      title: 'Pricing - AIM™',
      meta: '[{"name":"description","content":"With a distributed workforce, our rates are more affordable than leading competitors."},{"property":"og:description","content":"With a distributed workforce, our rates are more affordable than leading competitors."},{"property":"twitter:description","content":"With a distributed workforce, our rates are more affordable than leading competitors."},{"property":"og:url","content":"http://aimdigital.media/rates"}]'
    }, {
      where: {
        route: 'rates'
      }
    });

    await Page.update({
      title: 'Services - AIM™',
      meta: '[{"name":"description","content":"Dreaming of a project or app to put you on the map? Make your digital dream a reality with AIM\'s guaranteed software, design, innovation, and marketing services. Whether simple or complex, AIM™ for the best."},{"property":"og:description","content":"Dreaming of a project or app to put you on the map? Make your digital dream a reality with AIM\'s guaranteed software, design, innovation, and marketing services. Whether simple or complex, AIM™ for the best."},{"property":"twitter:description","content":"Dreaming of a project or app to put you on the map? Make your digital dream a reality with AIM\'s guaranteed software, design, innovation, and marketing services. Whether simple or complex, AIM™ for the best."},{"property":"og:url","content":"http://aimdigital.media/services"}]'
    }, {
      where: {
        route: 'services'
      }
    });
  }

  static async down(models, sequelize, DataTypes) {}
}
