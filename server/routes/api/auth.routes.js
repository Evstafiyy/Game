
const router = require('express').Router();
const { User, Game } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const bcrypt = require('bcrypt');

router.post('/registration', async (req, res) => {
  console.log(1111);
  try {
    const { name, email, password } = req.body;
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      res.status(400).json({ message: 'заполните все поля' });
      return;
    }

    const userInDb = await User.findOne({ where: { email } });
    console.log(2222, userInDb);
    if (userInDb) {
      res
        .status(400)
        .json({ message: 'Такой пользователь уже зарегестрирован' });

      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);


    let newUser = await User.create({

      name,
      email,
      password: hashPassword,
    });


    const gameForUser = await Game.create({ userId: newUser.id, score: 0 });
    

    console.log(3333, gameForUser);

    const user = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    


    const { accessToken, refreshToken } = generateTokens({ user });

    if (user) {
      res
        .status(201)

        .cookie('refresh', refreshToken, { httpOnly: true })
        .json({ message: 'success', user, gameId: gameForUser.id, accessToken });
      return;
    }

    res.status(400).json({ message: 'Что-то пошло не так' });

  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});


router.post('/authorization', async (req, res) => {
  console.log(123456);
  try {
    const { email, password } = req.body;
    // проверка на пустые поля
    if (email.trim() === '' || password.trim() === '') {
      res.status(400).json({ message: 'заполните все поля' });
      return;
    }
    console.log(email);
    const user = await User.findOne({ where: { email } });
     
    const gameForUser = await Game.findAll();
    console.log(55555,gameForUser)

    


    if (user) {
      const isCompare = await bcrypt.compare(password, user.password);
      if (isCompare) {
        delete user.dataValues.password;


        const { accessToken, refreshToken } = generateTokens({
          ...user,
          ...gameForUser,
        });
        res
          .status(200)
          .cookie('refresh', refreshToken, { httpOnly: true })
          .json({ message: 'success', accessToken, user });
        return;
      }
      res.status(400).json({ message: 'email или пароль не совпадают' });
      return;
    }

    res.status(400).json({ message: 'email или пароль не совпадают' });

  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});


router.get('/logout', (req, res) => {
  res.locals.user = undefined;
  res.status(200).clearCookie('refresh').json({ message: 'success' });
});


module.exports = router;
