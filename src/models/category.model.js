import mongoose from "mongoose";
import categorySchema from "../schemas/category-schema.js";

const Category = mongoose.model("categories", categorySchema);

export default Category;
