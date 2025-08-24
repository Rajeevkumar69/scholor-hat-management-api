import { StatusCodes } from "http-status-codes";
import Category from "../models/category.model.js";

class CategoryController {
     getAll = async (req, res) => {
          try {
               const docs = await Category.find();
               return res.status(StatusCodes.OK).json({
                    status: StatusCodes.OK,
                    message: 'All products',
                    data: docs
               });
          } catch (err) {
               return res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ status: StatusCodes.INTERNAL_SERVER_ERROR, message: err.message, data: [] });
          }
     };

     add = async (req, res) => {
          try {
               const body = req.body;
               const doc = await Category.create(body);
               return res.status(StatusCodes.CREATED).json({
                    status: StatusCodes.CREATED,
                    message: 'Data added successfully',
                    data: doc
               });
          } catch (err) {
               return res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ status: StatusCodes.INTERNAL_SERVER_ERROR, message: err.message, data: [] });
          }
     };
}

export default CategoryController;
