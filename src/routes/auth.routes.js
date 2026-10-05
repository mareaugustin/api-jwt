const router = require('express').Router();
const controller = require('../controllers/auth.controller');

router.post('/register', controller.register);
router.post('/login', controller.login);


router.get('/ok', controller.welcome);


module.exports = router;
      