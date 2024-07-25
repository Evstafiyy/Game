"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          themeId: 1,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 1,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 1,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 2,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 2,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 2,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 3,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 3,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
        {
          themeId: 3,
          question: "",
          answer: "",
          img: "",
          point: 15,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
