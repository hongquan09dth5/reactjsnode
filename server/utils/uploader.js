const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "server/assets/images/products");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const singleUpload = multer({ storage: storage }).single("file");

module.exports = {
  singleUpload
};
