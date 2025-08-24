import  StatusCode  from "http-status-codes";

const success = StatusCode.OK;
const internalServerError = StatusCode.INTERNAL_SERVER_ERROR;
const created = StatusCode.CREATED;



class BaseController {
     constructor(_repoClass) {
          this.repo = new _repoClass();
     }

     getAll = async (req, res) => {
          try {
               const docs = await this.repo.findAll();
               return res.status(success).json({
                    status: success,
                    message: 'All products',
                    data: docs
               });
          } catch (err) {
               return res
                    .status(internalServerError)
                    .json({ status: internalServerError, message: err.message, data: [] });
          }
     };

     add = async (req, res) => {
          try {
               const body = req.body;
               const doc = await this.repo.create(body);
               return res.status(created).json({
                    status: created,
                    message: 'Data added successfully',
                    data: doc
               });
          } catch (err) {
               return res
                    .status(internalServerError)
                    .json({ status: internalServerError, message: err.message, data: [] });
          }
     };

     update = async (req, res) => {
          try {
               let id = req.params.id;
               const body = req.body;
               const data = await this.repo.update(id, body);
               return res.status(success).json({
                    status: success,
                    message: 'Updated successfully',
                    data: data
               })
          } catch (err) {
               return res
                    .status(internalServerError)
                    .json({ status: internalServerError, message: err.message, data: [] });
          }
     }

     deleteById = async (req, res) => {
          try {
               let id = req.params.id;
               const data = await this.repo.deleteById(id);
               return res.status(success).json({
                    status: success,
                    message: 'Data deleted successfully',

               })
          } catch (err) {
               return res
                    .status(internalServerError)
                    .json({ status: internalServerError, message: err.message, data: [] });
          }
     }

     getById = async (req, res) => {
          try {
               let id = req.params.id;
               const data = await this.repo.findById(id);
               return res.status(success).json({
                    status: success,
                    message: 'Data Fetched',
                    data: data
               })

          } catch (err) {
               return res
                    .status(internalServerError)
                    .json({ status: internalServerError, message: err.message, data: [] });
          }
     }


}

export default BaseController;