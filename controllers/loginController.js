const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const modelTerap = require('../models/modelTerap');
const db = require('../src/database/models');
const Terapeuta = require('../src/database/models/Terapeuta');

const Terapeutas = db.Terapeuta;
const Usuarios = db.Usuario;

const loginController = {
    login: (req, res) => {
        res.render(path.resolve(__dirname,'../views/login'), {title: 'Inicia sesión'});
    },
    processLogin: (req, res) => {
        //let terapToLogin = modelTerap.findByField('emailTerap', req.body.email);
        let terapToLogin = Terapeutas.findOne({
            where:{
                email: req.body.email
            }
        });

        let userToLogin = Usuarios.findOne({
            where:{
                email: req.body.email
            }
        });

        Promise.all([terapToLogin, userToLogin])
            .then(([terap, user]) => {
                if(terap){
                    let validationPassword = bcryptjs.compareSync(req.body.password, terap.contraseña);
                    console.log(validationPassword);
                    if(validationPassword){
                        //delete terap.passwordTerap;
                        req.session.Logged = terap;
        
                        if(req.body.remember_user){
                            res.cookie('email', req.body.email, {maxAge: (1000*60)*60});
                        }
        
                        return res.redirect('/profile');
                    }else{
                        return res.render(path.resolve('views/login'), {title: 'Inicia sesión',
                            errors: {
                                email: {
                                    msg: 'Las credenciales son inválidas'
                                }
                            }
                        })
                    }
                }
                
                return res.render(path.resolve('views/login'), {title: 'Inicia sesión',
                    errors: {
                        email: {
                            msg: 'No se encuentra este correo electronico en nuestra base de datos'
                        }
                    }
                })
            })
            .catch(error => res.send(error));

        
        /*
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            console.log(resultValidation);
            res.render(path.resolve('views/login'), {errors: resultValidation.mapped(), oldData: req.body});
        } else {
            res.send('login');
        }
        modelTerap.create(req.body);*/
    }
}

module.exports = loginController;