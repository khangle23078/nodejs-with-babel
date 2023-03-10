import categoryModel from "../models/category.model.js";
import productModel from "../models/product.model.js";
import {getAll} from "../services/product.service.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAll();
    return res.status(200).json({
      status: 200,
      data: products,
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

export const getProductById = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await categoryModel.findById(id);
    return res.status(200).json({
      status: 200,
      data: product,
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

export const createProduct = async (req, res) => {
  try {
    const product = new productModel(req.body);
    await product.save();
    return res.status(200).json({
      status: 200,
      message: "create product success",
    });
  } catch (error) {
    return res.status(200).json({
      status: 400,
      data: null,
      error: error.message,
    });
  }
};
