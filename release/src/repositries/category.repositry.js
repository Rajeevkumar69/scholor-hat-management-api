import BaseRepositry from "./base.repositry.js";
import Category from '../models/category.model.js'


class CategoryRepositry extends BaseRepositry {
     constructor() {
          super(Category);
     }
}

export default CategoryRepositry;