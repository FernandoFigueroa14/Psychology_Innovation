const db = require('../../src/database/models');

const Terapeutas = db.Terapeuta;
const Usuarios = db.Usuario;

function userLoggedMiddleware(req, res, next){
    let cookieEmail = req.cookies.email;

    let terapFromCookie =  Terapeutas.findOne({
        where:{
            email: cookieEmail
        }
    });

    let userFromCookie =  Usuarios.findOne({
        where:{
            email: cookieEmail
        }
    });

    Promise.all([terapFromCookie, userFromCookie])
            .then(([terap, user]) => {
                if(terap){
                    req.session.Logged = terap;
                }
            })
            .catch(error => res.send(error));
    next();
}

module.exports = userLoggedMiddleware;