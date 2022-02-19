const multer = require("multer");
const { singleUpload } = require("./../../utils/uploader");

const uploadImage = async (req, res, next) => {
  await singleUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
};

module.exports = {
  uploadImage,
};
