"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          userId: 1,
          score: 0,
        },
        {
          userId: 2,
          score: 0,
        },
        {
          userId: 3,
          score: 0,
        },
        {
          userId: 4,
          score: 0,
        },
        {
          userId: 5,
          score: 0,
        },
        {
          userId: 1,
          score: 0,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games", null, {});
  },
};
