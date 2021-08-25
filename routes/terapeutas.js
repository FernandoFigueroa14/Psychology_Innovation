const express = require('express');
const router = express.Router();
const registerTerapValidations = require('../public/js/registerTerapValidation');
const upload = require('../public/js/multer/multerTerap.js');

const terapeutasController = require('../controllers/terapeutasController');


/* GET home page. */
router.get('/terapeutas', terapeutasController.terapeutas);

router.get('/terapeutas/login', terapeutasController.login);

router.get('/terapeutas/register', terapeutasController.register);
router.post('/terapeutas/register', upload.fields([{name: 'tituloTerap'}, {name: 'videoTerap'}]), registerTerapValidations, terapeutasController.registerTerap);

module.exports = router;