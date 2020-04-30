const { Router } = require('express');
const { authentication, userLogOut } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', authentication)
router.get('/logout', userLogOut)

module.exports = router;
