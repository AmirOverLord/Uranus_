import express from 'express';
import StatusController from '../Controller/StatusController'
let router = express.Router();

/* GET Server Status . */
router.get('/', (req, res, next) => StatusController.getStatus(res));

export default router;
