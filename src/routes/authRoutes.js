import express from 'express';
import { login, signup, registerValidation } from '../controllers/authController.js';
const router = express.Router();

router.route('/login').post(login);
router.route('/signup').post(registerValidation, signup);

export default router;
