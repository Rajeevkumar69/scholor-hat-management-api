import ProductRepositry from "../repositries/product.repositry.js";
import BaseController from "./base.controller.js";

class ProductController extends BaseController {
    constructor() {
        super(ProductRepositry); 
    }
}

export default ProductController;
