const { body } = require('express-validator');

const validations = [
    body('nameUser')
        .notEmpty()
        .withMessage('Debes de colocar tu nombre'),
    body('lastnameUser')
        .notEmpty()
        .withMessage('Debes de colocar tus apellidos'),
    body('emailUser')
        .notEmpty()
        .withMessage('Debes de colocar tu correo electrónico')
        .isEmail()
        .withMessage('Correo electronico invalido'),
    body('passwordUser')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña')
        .isStrongPassword('',{returnScore: true})
        .withMessage('Contraseña debil: la contraseña debe de ser mínimo de 8 caracteres, alfanumérica y con un caracter especial')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres'),    
    body('passwordConfirmUser')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres')
        .custom((value, { req }) => {
            if (value !== req.body.passwordUser) {
              throw new Error('La contraseña no es igual');
            }
        
            // Indicates the success of this synchronous custom validator
            return true;
          }),
    body('bdayUser')
        .notEmpty()
        .withMessage('Debes de colocar tu descripción'),
    body('fotoUser')
    .custom((value, { req }) => {
        if (!req.file) {
          throw new Error('Debes de colocar una foto de perfil');
        }
    
        // Indicates the success of this synchronous custom validator
        return true;
      })
]

module.exports = validations;