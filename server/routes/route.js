import express from 'express'
import { getProduct, addProduct } from '../controller/productController.js';


const router = express.Router();






router.get('/products', getProduct);
router.post('/addproduct',addProduct);




export default router;