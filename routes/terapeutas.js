const express = require('express');
const router = express.Router();

const terapeutasController = require('../controllers/terapeutasController')

/* GET home page. */
router.get('/terapeutas', terapeutasController.terapeutas);
router.get('/terapeutas/register', terapeutasController.register);

module.exports = router;