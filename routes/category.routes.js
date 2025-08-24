import express from "express";
import CategoryController from "../controllers/category.controller.js";

const router = express.Router();
const categoryController = new CategoryController();

router.get("/getall", categoryController.getAll);
router.post("/add", categoryController.add);

export default router;
