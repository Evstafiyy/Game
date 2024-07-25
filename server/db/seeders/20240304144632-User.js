/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt')
module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash('123', 5);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jane Doe',
        email: 'JaneDoe@gmail.com',
        password: hash,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};