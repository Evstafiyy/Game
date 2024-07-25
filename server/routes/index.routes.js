const router = require('express').Router();

const authRoutes = require('./api/auth.routes');
const tokensRoutes = require('./api/tokens.routes');

const usersRoutes = require('./api/user.router');


router.use('/auth', authRoutes);
router.use('/tokens', tokensRoutes);
router.use('/users', usersRoutes);

module.exports = router;
