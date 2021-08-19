const path = require('path');
const fs = require('fs');

// const productsJSON = path.resolve('./data/dataProducts.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const userController = {
    login: (req, res) => {
        res.render(path.resolve(__dirname,'../views/login'), {title: 'Login'});
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname,'../views/registerUser'), {title: 'Registro'});
    }
}

module.exports = userController;