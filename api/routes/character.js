import express from 'express';
import CharacterController from '../Controller/CharacterController'
let router = express.Router();

/* GET All . */
router.get('/all', (req, res, next) => CharacterController.getAll(res));

router.get('/count', (req, res, next) => CharacterController.count(res));

export default router;
