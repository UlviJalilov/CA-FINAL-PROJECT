import express from 'express';
import {
  createCarProduct,
  getAllCarProducts,
  updateCarProduct,
  deleteCarProduct,
} from '../controllers/carProductController';

const router = express.Router();

router.post('/', createCarProduct);
router.get('/', getAllCarProducts);
router.put('/:id', updateCarProduct);
router.delete('/:id', deleteCarProduct);

export default router;
