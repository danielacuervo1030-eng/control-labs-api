import { Router } from 'express';
import { equipmentsController } from '../controllers/equipments.controller';
const router = Router();

router.get('/search', equipmentsController.getequipmentsByFilter);
router.post('/', equipmentsController.createequipments);
router.patch('/:id/accept', equipmentsController.acceptequipmentsInventory);

export default router;