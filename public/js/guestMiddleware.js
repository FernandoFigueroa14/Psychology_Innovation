function guestMiddleware(req, res, next){
    if(req.session.terapLogged){
      return res.redirect('/terap/profile')
    }else if(req.session.userLogged){
        return res.redirect('/profile')
      }
    next()
  }
  
  module.exports = guestMiddleware