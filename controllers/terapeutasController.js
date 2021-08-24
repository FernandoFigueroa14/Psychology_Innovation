const path = require('path');
const fs = require('fs');

// const productsJSON = path.resolve('./data/dataProducts.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const terapeutasController = {
    terapeutas: (req, res) => {
        res.render(path.resolve(__dirname,'../views/terapeutas'), {title: 'Terapeutas'});
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname,'../views/login'), {title: 'Inicia sesión'});
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname,'../views/registerTerap'), {title: 'Registro'});
    },
    registerTerap: (req, res) => {
        return res.redirect('/terapeutas/login');
    }
}

module.exports = terapeutasController;