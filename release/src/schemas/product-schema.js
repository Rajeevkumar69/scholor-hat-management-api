import mongoose from "mongoose";
const objectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
     _id: { type: objectId, auto: true },
     name: { type: String, required: true },
     unitPrice: { type: Number, required: true },
     categoryId: { type: objectId, ref: "categories" }
}, { timestamps: true }
);

export default productSchema;
