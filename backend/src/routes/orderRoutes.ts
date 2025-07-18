import { Router } from 'express';
import { createOrder, updateOrderStatus, grantAccess, notifyMoodleAdmin } from '../controllers/orderController';

const router = Router();

router.post('/', createOrder);
router.patch('/:id/status', updateOrderStatus);
router.post('/:id/grant-access', grantAccess);
router.post('/:id/notify-admin', notifyMoodleAdmin);

export default router; 