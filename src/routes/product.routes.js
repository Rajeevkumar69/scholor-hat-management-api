import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();
const productController = new ProductController();

router.get("/getall", productController.getAll);
router.post("/add", productController.add);
router.patch('/update/:id', productController.update);
router.get('/get/:id', productController.getById );
router.delete('/delete/:id', productController.deleteById);


export default router;
