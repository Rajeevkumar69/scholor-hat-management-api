import BaseRepositry from "./base.repositry.js";
import Product from '../models/product.model.js';


class ProductRepositry extends BaseRepositry {
     constructor() {
          super(Product);
     }
}

export default ProductRepositry;