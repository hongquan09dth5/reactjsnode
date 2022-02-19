const { Router } = require("express");

const controller = require("../controllers/uploader.controller");

const router = Router();

router.post("/upload", controller.uploadImage)

module.exports = router;
