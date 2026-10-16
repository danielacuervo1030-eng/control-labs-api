import { Router } from 'express';
import { labsController } from '../controllers/labs.controller';
const router = Router();

router.get('/search', labsController.getlabsByFilter);
router.post('/', labsController.createlabs);
router.patch('/:id/accept', labsController.acceptlabsInventory);

export default router;