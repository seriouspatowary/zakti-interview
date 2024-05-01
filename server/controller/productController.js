import Product from "../model/productSchema.js";

export const getProduct = async (req, res) => {
  try {
  
  
    const products = await Product.find({ });
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

export const addProduct = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;

 
    const newProduct = new Product({
     
      name,
      quantity,
      price,
      
    });

    await newProduct.save();

    res.status(200).json(newProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

