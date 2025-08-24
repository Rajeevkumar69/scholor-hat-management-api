import mongoose from "mongoose";
import productSchema from "../schemas/product-schema.js";

const Product = mongoose.model("products", productSchema);

export default Product;
