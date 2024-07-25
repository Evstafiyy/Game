"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          themeId: 1,
          question: "Что такое реакт?",
          answer: "библиотека рисует интерфейс",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 1,
          question: "Что такое элемент?",
          answer: "аштиэмль",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 1,
          question: "Что такое фрагмент?",
          answer: "кувырки",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 2,
          question: "Что такое компонент?",
          answer: "заучи по теории",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 2,
          question: "Что такое юзстейт?",
          answer: "хук",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 2,
          question: "Что такое юзэфект?",
          answer: "хук",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 3,
          question: "Что такое юзредюсер?",
          answer: "хук",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 3,
          question: "Что такое юзконтекст?",
          answer: "хук",
          img: "будет картинка",
          point: 15,
        },
        {
          themeId: 3,
          question: "Что такое юзнавигэйт?",
          answer: "хук",
          img: "будет картинка",
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
