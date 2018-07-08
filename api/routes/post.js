import PostController from '../controller/PostController';
import Validate from 'express-validation';
import Schema from '../Middleware/Post';
import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => PostController.getAll(res));

router.post('/', Validate(Schema.create), (req, res, next) => PostController.Create(req,res));

router.put('/:id', Validate(Schema.update),(req, res, next) => PostController.Update(req, res));

router.delete('/:id', Validate(Schema.delete),({params}, res, next) => PostController.Delete(params.id, res));

router.get('/:id', Validate(Schema.find),({params}, res, next) => PostController.getById(params.id, res));

export default router;
