const { Router } = require('express');
const { authentication, userLogOut, getAuthUser } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', authentication)
router.get('/logout', userLogOut)
router.get('/islogin', getAuthUser)

module.exports = router;
