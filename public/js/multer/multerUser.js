const multer = require('multer');
const path  = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname ,'../../images/profilePicUser'));
    },
    filename: function (req, file, cb) {
        cb(null, 'profile-user' + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage });

module.exports = upload;