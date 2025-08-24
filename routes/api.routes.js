import express from "express";
import categoryRoutes from "./category.routes.js";
import productRoutes from './product.routes.js';

const router = express.Router();

router.use("/category", categoryRoutes);
router.use("/product",   productRoutes);

export default router;
