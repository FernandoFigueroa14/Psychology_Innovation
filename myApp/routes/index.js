const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.home);

router.get('/index', indexController.home);
router.get('/faqs', indexController.faqs);

module.exports = router;
