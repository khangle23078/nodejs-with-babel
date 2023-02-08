import mongoose, {Schema} from "mongoose";

const productSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Boolean,
      require: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model("products", productSchema);
