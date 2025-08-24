import mongoose from "mongoose";
const objectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
          _id: { type: objectId, auto: true },
          name: { type: String, required: true }
     }, { timestamps: true }
);

export default categorySchema;
