const jwt = require('jsonwebtoken');
const { User, Game } = require('../db/models');


async function verifyRefreshToken(req, res, next) {
  try {
    // проверяем куку на наличие токена
    const { refresh } = req.cookies;
    console.log(refresh);
    let { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN);
    console.log(123);
    // опционально
    user = await User.findOne({
      where: { id: user.id },
      attributes: ['id', 'name', 'email'],
    });

    const game = await Game.findOne({where: {userId:user.id}})
    console.log(game)

    res.locals.user = user;
    res.locals.user.gameId = game.id

    console.log(res.locals.user.gameId)

    next();
  } catch (error) {
    console.log('Invalid refresh token');
    res.clearCookie('refreshToken').sendStatus(401);
  }
}

module.exports = verifyRefreshToken;
