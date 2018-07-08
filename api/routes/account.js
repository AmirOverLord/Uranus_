import AccountController from '../controller/AccountController';
import Validate from 'express-validation';
import Schema from '../Middleware/Account';
import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => AccountController.getAll(res));

router.get('/count', (req, res, next) => AccountController.count(res));

router.post('/', Validate(Schema.create), (req, res, next) => AccountController.Create(req,res));

router.put('/:id', Validate(Schema.update),(req, res, next) => AccountController.Update(req, res));

router.post('/login', Validate(Schema.login), (req, res, next) => AccountController.Login(req, res));

router.get('/:id', ({params}, res, next) => AccountController.getById(params.id, res));

export default router;
