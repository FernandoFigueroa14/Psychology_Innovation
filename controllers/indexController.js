const path = require('path');
const fs = require('fs');

// const productsJSON = path.resolve('./data/dataProducts.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const indexController = {
    home: (req, res) => {
        res.render(path.resolve('views/index'), {title: 'Coralio - Sanamos mente y espiritu'});
    },
    faqs: (req, res) => {
        res.render(path.resolve('views/faqs'), {title: 'FAQs'});
    }
}

module.exports = indexController;