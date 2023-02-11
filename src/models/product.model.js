import mongoose, {Schema} from "mongoose";

const productSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("products", productSchema);
