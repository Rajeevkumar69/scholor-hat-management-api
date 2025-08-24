import CategoryRepositry from "../repositries/category.repositry.js";
import BaseController from "./base.controller.js";

class CategoryController extends BaseController {
     constructor(){
          super(CategoryRepositry);
     }
}

export default CategoryController;
