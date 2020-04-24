const { Router } = require('express');
const { authentication } = require('../controllers/auth.controller');

const router = Router();

router.post('login', authentication)

module.exports = router;
