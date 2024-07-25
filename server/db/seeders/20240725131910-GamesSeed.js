"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          userId: 1,
          score: 2,
        },
        {
          userId: 2,
          score: 2,
        },
        {
          userId: 3,
          score: 2,
        },
        {
          userId: 4,
          score: 2,
        },
        {
          userId: 5,
          score: 2,
        },
        {
          userId: 1,
          score: 2,
        },
        {
          userId: 2,
          score: 2,
        },
        {
          userId: 3,
          score: 2,
        },
        {
          userId: 4,
          score: 2,
        },
        {
          userId: 5,
          score: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games", null, {});
  },
};
