const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const modelTerap = require('../models/modelTerap');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const Usuarios = db.Usuario;

// const productsJSON = path.resolve('./data/dataProducts.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const userController = {
    register: (req, res) => {
        res.render(path.resolve(__dirname,'../views/userViews/registerUser'), {title: 'Registro'});
    },
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);
        //console.log(req.files.fotoTerap.filename);

        if (!resultValidation.isEmpty()) {
            res.render(path.resolve('views/userViews/registerUser'), {errors: resultValidation.mapped(), oldData: req.body, title: 'Registro'});
        } else {

            Usuarios.findOne({
                where:{
                    email: req.body.emailUser
                }
            }).then((email) => {
                if(email){
                    return res.render(path.resolve('views/userViews/registerUser'), {errors: {emailUser: {msg: 'Este correo electronico ya está registrado'}}, oldData: req.body, title: 'Registro'});
                }else{
                    
                    let hoy = new Date();
            
                    Usuarios.create({
                            nombres: req.body.nameUser,
                            apellidos: req.body.lastnameUser,
                            email: req.body.emailUser,
                            contraseña: bcryptjs.hashSync(req.body.passwordUser, 10),
                            fechaNacimiento: req.body.bdayUser,
                            linkImagen: req.file.filename,
                            createdAt: hoy.getFullYear() + '-' + hoy.getMonth() + '-' + hoy.getDay() + ' ' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds(),
                            updatedAt: hoy.getFullYear() + '-' + hoy.getMonth() + '-' + hoy.getDay() + ' ' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
                        }
                    )
                    .then(()=> {
                        return res.redirect('/login')})            
                    .catch(error => res.send(error));

                }
            })
            .catch(error => res.send(error));

            
    
            // let terapToCreate = {
            //     ...req.body,
            //     passwordTerap: bcryptjs.hashSync(req.body.passwordTerap, 10),
            //     profilepic: req.files.fotoTerap[0].filename,
            //     video: req.files.videoTerap[0].filename,
            //     titulo: req.files.tituloTerap[0].filename,
            //     tipo: 'terapeuta'
            // };

            // delete terapToCreate.passwordConfirmTerap;

            // let terapCreated = modelTerap.create(terapToCreate);
            // res.redirect('/login');
        }
    },
    profile: (req, res) => {

        console.log(req.cookies.email);

        console.log(req.session.userLogged);
        res.render(path.resolve('views/userViews/userProfile'), {title: 'Perfil', user: req.session.userLogged});
    },
    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = userController;