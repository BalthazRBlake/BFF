import { Router } from 'express';
import { webBff } from '../bff/webController.js'

export const webRouter = Router();

webRouter.get('/dashboard/:userId', webBff);