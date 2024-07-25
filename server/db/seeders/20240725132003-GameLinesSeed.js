"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameLines",
      [
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        {
          gameId: 1,
          questionId: 1,
          status: false,
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameLines", null, {});
  },
};
