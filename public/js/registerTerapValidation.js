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
        .isStrongPassword('',{returnScore: true})
        .withMessage('Contraseña debil: la contraseña debe de ser mínimo de 8 caracteres, alfanumérica y con un caracter especial')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres'),    
    body('passwordConfirmTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres')
        .custom((value, { req }) => {
            if (value !== req.body.passwordTerap) {
              throw new Error('La contraseña no es igual');
            }
        
            // Indicates the success of this synchronous custom validator
            return true;
          }),
    body('cedulaTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu cédula profesional')
        .isInt()
        .withMessage('Cédula profesional inválida'),
    body('descriptionTerap')
        .notEmpty()
        .withMessage('Debes de colocar tu descripción'),
    body('fotoTerap')
    .custom((value, { req }) => {
        if (!req.files.fotoTerap) {
          throw new Error('Debes de colocar una foto de perfil');
        }
    
        // Indicates the success of this synchronous custom validator
        return true;
      }),
    body('videoTerap')
        .custom((value, { req }) => {
            if (!req.files.videoTerap) {
            throw new Error('Debes de colocar tu video');
            }
        
            // Indicates the success of this synchronous custom validator
            return true;
        }),
    body('tituloTerap')
        .custom((value, { req }) => {
            if (!req.files.tituloTerap) {
            throw new Error('Debes de colocar tu titulo universitario');
            }
        
            // Indicates the success of this synchronous custom validator
            return true;
        }),
    body('especialidad')
        .notEmpty()
        .withMessage('Debes de marcar al menos una especialidad')
]

module.exports = validations;