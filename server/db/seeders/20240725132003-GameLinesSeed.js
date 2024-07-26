"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameLines",
      [
        {
          gameId: 6,
          questionId: 1,
          status: true,
        },
        {
          gameId: 6,
          questionId: 2,
          status: true,
        },
        {
          gameId: 6,
          questionId: 3,
          status: true,
        },
        {
          gameId: 6,
          questionId: 4,
          status: true,
        },
        {
          gameId: 6,
          questionId: 5,
          status: true,
        },
        {
          gameId: 6,
          questionId: 6,
          status: true,
        },
        {
          gameId: 6,
          questionId: 7,
          status: true,
        },
        {
          gameId: 6,
          questionId: 8,
          status: true,
        },
        {
          gameId: 6,
          questionId: 9,
          status: true,
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameLines", null, {});
  },
};
