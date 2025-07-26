import express from 'express';
import {
    createFeaturedProduct,
    getFeaturedProducts,
    updateFeaturedProduct,
    deleteFeaturedProduct
} from '../controllers/featuredProductController';

const router = express.Router();

router.post('/', createFeaturedProduct);
router.get('/', getFeaturedProducts);
router.get('/featured', getFeaturedProducts);
router.put('/:id', updateFeaturedProduct);
router.delete('/:id', deleteFeaturedProduct);

export default router;

