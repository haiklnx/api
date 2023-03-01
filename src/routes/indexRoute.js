import { Router } from 'express';
import indexController from '../controllers/index.Controller';

const router = new Router();

router.get('/', indexController.index);

export default router;
