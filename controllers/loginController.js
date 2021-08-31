const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const modelTerap = require('../models/modelTerap');

const loginController = {
    login: (req, res) => {
        res.render(path.resolve(__dirname,'../views/login'), {title: 'Inicia sesión'});
    },
    processLogin: (req, res) => {
        let terapToLogin = modelTerap.findByField('emailTerap', req.body.user);

        if(terapToLogin){
            let validationPassword = bcryptjs.compareSync(req.body.password, terapToLogin.passwordTerap);
            if(validationPassword){
                delete terapToLogin.passwordTerap;
                req.session.terapLogged = terapToLogin;

                if(req.body.remember_user){
                    res.cookie('emailTerap', req.body.user, {maxAge: (1000*60)*60});
                }

                return res.redirect('/profile');
            }else{
                return res.render(path.resolve('views/login'), {
                    errors: {
                        user: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                })
            }
        }
        
        return res.render(path.resolve('views/userViews/login'), {
            errors: {
                user: {
                    msg: 'No se encuentra este correo electronico en nuestra base de datos'
                }
            }
        })

        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            console.log(resultValidation);
            res.render(path.resolve('views/userViews/login'), {errors: resultValidation.mapped(), oldData: req.body});
        } else {
            res.send('login');
        }
        modelTerap.create(req.body);
    },
}

module.exports = loginController;