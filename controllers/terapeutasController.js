const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const modelTerap = require('../models/modelTerap');

// const productsJSON = path.resolve('./data/dataProducts.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const terapeutasController = {
    terapeutas: (req, res) => {
        res.render(path.resolve(__dirname,'../views/terapViews/terapeutas'), {title: 'Terapeutas'});
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname,'../views/terapViews/registerTerap'), {title: 'Registro'});
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        console.log(req.files.fotoTerap.filename);
        // console.log(resultValidation.mapped());

        if (!resultValidation.isEmpty()) {
            res.render(path.resolve('views/terapViews/registerTerap'), {errors: resultValidation.mapped(), oldData: req.body, title: 'Registro'});
        } else {

            let terapInDB = modelTerap.findByField('emailTerap', req.body.emailTerap);

            if(terapInDB){
                return res.render(path.resolve('views/terapViews/registerTerap'), {errors: {emailTerap: {msg: 'Este correo electronico ya está registrado'}}, oldData: req.body});
            }

            let terapToCreate = {
                ...req.body,
                passwordTerap: bcryptjs.hashSync(req.body.passwordTerap, 10),
                profilepic: req.file.fotoTerap.filename,
                video: req.file.videoTerap.filename,
                titulo: req.file.tituloTerap.filename,
                tipo: 'terapeuta'
            };

            delete terapToCreate.passwordConfirmTerap;

            let terapCreated = modelTerap.create(terapToCreate);
            res.redirect('/login');
        }
    },
    profile: (req, res) => {

        console.log(req.cookies.emailTerap);

        res.render(path.resolve('views/terapViews/profile'), {user: req.session.terapLogged});
    },
    logout: (req, res) => {
        res.clearCookie('emailTerap');
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = terapeutasController;