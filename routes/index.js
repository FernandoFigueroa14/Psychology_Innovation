const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', indexController.home);

router.get('/index', indexController.home);
router.get('/faqs', indexController.faqs);

router.get('/login', loginController.login);

module.exports = router;
