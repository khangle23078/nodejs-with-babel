import categoryModel from "../models/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    return res.status(200).json({
      status: 200,
      data: categories,
      error: null,
    });
  } catch (error) {
    return res.status(200).json({
      status: 400,
      data: null,
      error: error.message,
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const {id} = req.params;
    const category = await categoryModel.findById(id);
    return res.status(200).json({
      status: 200,
      data: category,
      error: null,
    });
  } catch (error) {
    return res.status(200).json({
      status: 400,
      data: null,
      error: error.message,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const product = new categoryModel(req.body);
    await product.save();
    return res.status(200).json({
      status: 200,
      message: "create category success",
    });
  } catch (error) {
    return res.status(200).json({
      status: 400,
      data: null,
      error: error.message,
    });
  }
};
