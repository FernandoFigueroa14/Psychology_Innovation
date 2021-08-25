const multer = require('multer');
const path  = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if(path.extname(file.originalname)=='.mp4'){
        cb(null, 'public/images/videos');
      } else if(path.extname(file.originalname)=='.pdf'){
        cb(null, 'public/images/titulos');
      } 
    },
    filename: function (req, file, cb) {
        if(path.extname(file.originalname)=='.mp4'){
            cb(null, 'video-terap' + '-' + Date.now() + path.extname(file.originalname));
          } else if(path.extname(file.originalname)=='.pdf'){
            cb(null, 'titulo-terap' + '-' + Date.now() + path.extname(file.originalname));
          }   
    }
});

let upload = multer({ storage: storage });

module.exports = upload;