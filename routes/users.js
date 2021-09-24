var express = require('express');
var router = express.Router();
const upload = require('../public/js/multer/multerUser.js');
const registerUserValidation = require('../public/js/registerUserValidation');
const guestMiddleware = require('../public/js/guestMiddleware');

const userController = require('../controllers/userController');

/* GET users listing. */

router.get('/user/register', guestMiddleware, userController.register);
router.post('/user/register', upload.single('fotoUser'), registerUserValidation, userController.processRegister);

router.get('/profile', userController.profile);

module.exports = router;
