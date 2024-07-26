"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          themeId: 1,
          question: "Что вернет следующий код: console.log(0.1 + 0.2 == 0.3)",
          answer: "Почему false",
          img: "https://w.forfun.com/fetch/69/696c277f479c77733e3b75a3ab71c05a.jpeg",
          point: 100,
        },
        {
          themeId: 1,
          question: "Что вернет следующий код: console.log('b' + 'a' + +'a' + 'a')",
          answer: "Почему 'baNaNa'",
          img: "https://avatars.mds.yandex.net/i?id=e9e0dd12717a157ae35fdea167efbef7bd23b5b44919f56b-4566166-images-thumbs&n=13",
          point: 200,
        },
        {
          themeId: 1,
          question: "Известный код из Матрицы на самом деле обозначает",
          answer: "Рецепт суши",
          img: "https://kartinkof.club/uploads/posts/2022-06/1656013966_11-kartinkof-club-p-kartinki-s-nadpisyu-ya-stal-dyadei-12.jpg",
          point: 300,
        },
        {
          themeId: 2,
          question: "Что в море является ориентиром для моряка?",
          answer: "Полярная звезда",
          img: "https://i.pinimg.com/originals/25/ef/1c/25ef1c889021cc96b475a242a347d0cc.jpg",
          point: 100,
        },
        {
          themeId: 2,
          question: "Новобранец на флоте – это …",
          answer: "Салага",
          img: "https://img2.safereactor.cc/pics/comment/%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-%D1%88%D0%B8%D0%BC%D0%BF%D0%B0%D0%BD%D0%B7%D0%B5-%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D1%8C-668199.jpeg",
          point: 200,
        },
        {
          themeId: 2,
          question: "Почему моряки никогда не играют в кости?",
          answer: "Потому что они боятся потерять свои корабли",
          img: "https://www.cruisegid.ru/assets/gallery/360/10976.jpg",
          point: 300,
        },
        {
          themeId: 3,
          question: "Где снимали трилогию «Властелин колец?",
          answer: "в Новой Зеландии",
          img: "https://i.ytimg.com/vi/jRFlmMMBxjc/maxresdefault.jpg",
          point: 100,
        },
        {
          themeId: 3,
          question: "Какого цвета полосатый свитер Фредди Крюгера?",
          answer: "красно-зеленого",
          img: "https://kartinki.pics/uploads/posts/2022-03/1648208328_4-kartinkin-net-p-kartinki-freddi-kryugera-4.jpg",
          point: 200,
        },
        {
          themeId: 3,
          question: "Сколько оставалось жить тем, кто смотрел проклятую видеокассету в «Звонке»?",
          answer: "7 дней",
          img: "https://www.film.ru/sites/default/files/images/maxresdefault(41).jpg",
          point: 300,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
