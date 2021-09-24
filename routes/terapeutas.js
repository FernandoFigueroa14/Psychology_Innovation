const express = require('express');
const router = express.Router();
const registerTerapValidations = require('../public/js/registerTerapValidation');
const upload = require('../public/js/multer/multerTerap.js');
const guestMiddleware = require('../public/js/guestMiddleware');

const terapeutasController = require('../controllers/terapeutasController');


/* GET home page. */
router.get('/terapeutas', terapeutasController.terapeutas);
router.get('/terapeutas/detalle/:id', terapeutasController.terapeutasDetalle);

router.get('/terapeutas/register', guestMiddleware, terapeutasController.register);
router.post('/terapeutas/register', upload.fields([{name: 'tituloTerap'}, {name: 'videoTerap'}, {name: 'fotoTerap'}]), registerTerapValidations, terapeutasController.processRegister);

router.get('/terap/profile', terapeutasController.profile);

module.exports = router;