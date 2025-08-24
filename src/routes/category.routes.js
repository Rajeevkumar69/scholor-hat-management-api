import express from "express";
import CategoryController from "../controllers/category.controller.js";

const router = express.Router();
const categoryController = new CategoryController();

router.get("/getall", categoryController.getAll);
router.post("/add", categoryController.add);
router.patch('/update/:id', categoryController.update);
router.get('/get/:id', categoryController.getById );
router.delete('/delete/:id', categoryController.deleteById);

export default router;
