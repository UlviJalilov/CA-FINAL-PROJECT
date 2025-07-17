import express from 'express';
import {
    createProduct,
    getProducts,
    getFeaturedProducts,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.post('/', createProduct); // POST /api/products
router.get('/', getProducts); // GET /api/products
router.get('/featured', getFeaturedProducts); // GET /api/products/featured
router.put('/:id', updateProduct); // PUT /api/products/:id
router.delete('/:id', deleteProduct); // DELETE /api/products/:id

export default router;
