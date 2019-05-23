import {getModels} from '@boilerplatejs/core/lib/Sequelize';

export default class {
  static async up(models, sequelize, DataTypes) {
    const {Robot} = getModels();

    await Robot.create({ rule: 'User-agent: *' });
    await Robot.create({ rule: 'Disallow: /dashboard' });
    await Robot.create({ rule: 'Disallow: /login' });
    await Robot.create({ rule: 'Disallow: /chat' });
    await Robot.create({ rule: 'Disallow: /survey' });
    await Robot.create({ rule: 'Disallow: /widgets' });
    await Robot.create({ rule: 'Disallow: /home' });
    await Robot.create({ rule: 'Disallow: /home/' });
  }

  static async down(models, sequelize, DataTypes) {
    const {Robot} = getModels();

    await Robot.destroy({ where: { rule: 'User-agent: *' } });
    await Robot.destroy({ where: { rule: 'Disallow: /dashboard' } });
    await Robot.destroy({ where: { rule: 'Disallow: /login' } });
    await Robot.destroy({ where: { rule: 'Disallow: /chat' } });
    await Robot.destroy({ where: { rule: 'Disallow: /survey' } });
    await Robot.destroy({ where: { rule: 'Disallow: /widgets' } });
    await Robot.destroy({ where: { rule: 'Disallow: /home' } });
    await Robot.destroy({ where: { rule: 'Disallow: /home/' } });
  }
}
