const { Router } = require("express");

const controller = require("../controllers/product.controller");

const router = Router();

router.get("/product", controller.getProducts);
router.get("/product/:id", controller.getProduct);
router.post("/product/create", controller.createProduct);
router.put("/product/update", controller.updateProduct);
router.delete("/product/delete/:id", controller.deleteProduct);

module.exports = router;
