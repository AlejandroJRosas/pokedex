import { Router } from 'express';
import { getItems } from './actions/get-items';

const router = Router();

router.get('/', getItems);

export default router;
