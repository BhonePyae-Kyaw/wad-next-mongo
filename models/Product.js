import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
});

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);
// if it is already there, use that model, otherwise create a new one
export default Product;
