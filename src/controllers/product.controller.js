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
