import express from 'express';
import { getData } from '../controllers/data.controller.js';

const router = express.Router();


router.get('/products',getData);

export default router;