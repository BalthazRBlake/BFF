import { Router } from 'express';
import { mobileBff } from '../bff/mobileController.js'

export const mobileRouter = Router();

mobileRouter.get('/dashboard/:userId', mobileBff);