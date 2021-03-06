const multer = require('multer');
const path  = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if(path.extname(file.originalname)=='.mp4'){
        cb(null, path.resolve(__dirname ,'../../images/videos'));
      } else if(path.extname(file.originalname)=='.pdf'){
        cb(null, path.resolve(__dirname ,'../../images/titulos'));
      } else if(path.extname(file.originalname)=='.jpg' || path.extname(file.originalname)=='.png'){
        cb(null, path.resolve(__dirname ,'../../images/profilePicTerap'));
      }
    },
    filename: function (req, file, cb) {
        if(path.extname(file.originalname)=='.mp4'){
            cb(null, 'video-terap' + '-' + Date.now() + path.extname(file.originalname));
          } else if(path.extname(file.originalname)=='.pdf'){
            cb(null, 'titulo-terap' + '-' + Date.now() + path.extname(file.originalname));
          } else if(path.extname(file.originalname)=='.jpg' || path.extname(file.originalname)=='.png'){
            cb(null, 'profile-terap' + '-' + Date.now() + path.extname(file.originalname));
          } 
    }
});

let upload = multer({ storage: storage });

module.exports = upload;