import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    collection: "categories",
  }
);

export default mongoose.model("categories", categorySchema);
