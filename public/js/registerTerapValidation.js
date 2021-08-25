const { body } = require('express-validator');

const validations = [
    body('nameTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu nombre'),
    body('lastnameTerap')
        .notEmpty()
        .withMessage('Debes de colocar tus apellidos'),
    body('emailTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu correo electrónico')
        .isEmail()
        .withMessage('Correo electronico invalido'),
    body('passwordTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres'),    
    body('passwordConfirmTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres'),
    body('cedulaTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu cédula profesional')
        .isInt()
        .withMessage('Cédula profesional inválida'),
    body('descriptionTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu descripción'),
    body('videoTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu video'),
    body('tituloTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu titulo universitario')
]

module.exports = validations;