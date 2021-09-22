const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const modelTerap = require('../models/modelTerap');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const Terapeuta = require('../src/database/models/Terapeuta');

//Modelos
const Terapeutas = db.Terapeuta;

// const productsJSON = path.resolve('./data/dataProducts.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const terapeutasController = {
    terapeutas: (req, res) => {
        Terapeutas.findAll({
            include: ['especialidad']
        })
            .then(terapeutas => {
                res.render(path.resolve(__dirname,'../views/terapViews/terapeutas'), {title: 'Terapeutas', terapeutas});
                //console.log(terapeutas);
            })
    },
    terapeutasDetalle: (req, res) => {
        Terapeutas.findByPk(req.params.id,
            {
                include : ['especialidad']
            })
            .then(terapeuta => {
                res.render(path.resolve(__dirname,'../views/terapViews/terapeutaDetalle.ejs'),  {title: 'Detalle del Terapeuta', terapeuta});
            });
        },
    register: (req, res) => {
        res.render(path.resolve(__dirname,'../views/terapViews/registerTerap'), {title: 'Registro'});
    },
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);
        //console.log(req.files.fotoTerap.filename);
        // console.log(resultValidation.mapped());

        if (!resultValidation.isEmpty()) {
            res.render(path.resolve('views/terapViews/registerTerap'), {errors: resultValidation.mapped(), oldData: req.body, title: 'Registro'});
        } else {

            let terapInDB = Terapeutas.findOne({
                where:{
                    email: req.body.emailTerap
                }
            });
            let cedulaInDB = Terapeutas.findOne({
                where:{
                    cedula: req.body.cedulaTerap
                }
            });

            Promise.all([terapInDB, cedulaInDB])
            .then(([email, cedula]) => {
                if(email){
                    return res.render(path.resolve('views/terapViews/registerTerap'), {errors: {emailTerap: {msg: 'Este correo electronico ya está registrado'}}, oldData: req.body, title: 'Registro'});
                }else if(cedula){
                    return res.render(path.resolve('views/terapViews/registerTerap'), {errors: {cedulaTerap: {msg: 'Esta cédula ya está registrado'}}, oldData: req.body, title: 'Registro'});
                }else{
                    
                    let hoy = new Date();
            
                    Terapeutas.create({
                            nombres: req.body.nameTerap,
                            apellidos: req.body.lastnameTerap,
                            email: req.body.emailTerap,
                            contraseña: bcryptjs.hashSync(req.body.passwordTerap, 10),
                            cedula: req.body.cedulaTerap,
                            descripcion: req.body.descriptionTerap,
                            linkVideo: req.files.videoTerap[0].path,
                            linkTitulo: req.files.tituloTerap[0].path,
                            linkImagen: req.files.fotoTerap[0].path,
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

        res.render(path.resolve('views/terapViews/terapProfile'), {title: 'Perfil', user: req.session.Logged});
    },
    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = terapeutasController;