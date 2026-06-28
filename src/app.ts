import express from 'express';
import { webRouter } from './Routes/webRouter.js';
import { mobileRouter } from './Routes/mobileRouter.js';

// Create the Web BFF Instance
const webBffApp = express();
webBffApp.use(express.json());
webBffApp.use('/api', webRouter);

const WEB_PORT = 3000;
webBffApp.listen(WEB_PORT, () => {
    console.log(`🌐 Web BFF:   http://localhost:${WEB_PORT}/api/dashboard/:userId`);
});

// Create the Mobile BFF Instance
const mobileBffApp = express();
mobileBffApp.use(express.json());
mobileBffApp.use('/api', mobileRouter);

const MOBILE_PORT = 4000;
mobileBffApp.listen(MOBILE_PORT, () => {
    console.log(`📱 Mobile BFF:   http://localhost:${MOBILE_PORT}/api/dashboard/:userId`);
});