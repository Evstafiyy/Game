"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          themeId: 1,
          question: "Управляться с этой деталью свадебного наряда принцесса Диана тренировалась при помощи привязанных к поясу простыней",
          answer: "шлейф свадебного платья (он был длиной почти 8 метров)",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/e31/739/4976e15cfabc110f3569f319ec.jpg.webp",
          point: 100,
        },
        {
          themeId: 1,
          question: "Отгадайте загадку застойных времен: „Длинная, зеленая, колбасой пахнет“",
          answer: "электричка из Москвы",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/551/fe8/45c58e5e2e98d854648d924967.jpg.webp",
          point: 200,
        },
        {
          themeId: 1,
          question: "Остроумная и эпатажная актриса Таллула Бэнкхед говорила, что дневники ведут только хорошие девочки: плохим не хватает именно этого",
          answer: "времени",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/026/427/8f12ff5b9fb41e548617e6ff25.jpg.webp",
          point: 300,
        },
        {
          themeId: 2,
          question: "Швейцарские ветеринары долго следили за изменением веса слонов в зоопарках Европы. Оказалось, что раз в 5–8 лет слон прибавляет в весе до 300 килограммов, а спустя несколько месяцев вновь становится легче. С чем же это связано?",
          answer: "смена зубов",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/96d/7a6/74ae645872a4ce811d24ac8b41.jpg.webp",
          point: 100,
        },
        {
          themeId: 2,
          question: "Услышав от продюсера, что ей предлагают роль Бабы-яги, Елизавета Боярская обрадовалась и стала придумывать грим. Но тут же выяснилось именно это обстоятельство",
          answer: "это была роль в мультфильме «Три богатыря на дальних берегах»",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/906/b86/5d005155878585a9591e1c6a8f.jpg.webp",
          point: 200,
        },
        {
          themeId: 2,
          question: "Эти палочки из пластика, вносящие немалый вклад в загрязнение океана, с нынешнего года в Евросоюзе под запретом",
          answer: "ватные палочки",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/8b0/dd9/2dba595d63958b01b609bc6eda.jpg.webp",
          point: 300,
        },
        {
          themeId: 3,
          question: "На мероприятиях и встречах Кейт Миддлтон всегда держит сумочку в левой руке, ведь по правилам правая рука монарших особ должна быть свободна для этого..",
          answer: "для приветствий",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/47f/c77/be1f535b9987e2573ff8965ee8.jpg.webp",
          point: 100,
        },
        {
          themeId: 3,
          question: "Гарвардские ученые, проведя исследование на мышах, доказали, что стресс действительно может вызвать этот эффект",
          answer: "седину",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/9cc/50c/6b363c596aadbdfd3249861ac2.jpg.webp",
          point: 200,
        },
        {
          themeId: 3,
          question: "В начале XV века на деньги лорд-мэра Лондона Ричарда Уиттингтона на самом берегу Темзы был построен этот „Длинный дом“ на 128 сидячих мест — по 64 в каждом крыле",
          answer: "общественный туалет",
          img: "https://wl-adme.cf.tsp.li/resize/728x/webp/0fb/b71/85f0ad5f999bb2fbe03fb10ccb.jpg.webp",
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
