const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/etudiant.controller');

router.get('/', auth, controller.all);

module.exports = router;
      