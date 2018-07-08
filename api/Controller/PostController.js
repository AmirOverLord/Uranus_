import Controller from './Controller';
import {Post} from '../Models/db/Site';
import Sequelize from 'sequelize';

export default class PostController extends Controller {
    /**
     * Constructor.
     */
    constructor() {
        super();
    }

    /**
     * Get All Posts Info.
     * @param res
     */
    static getAll(res) {
        Post.findAll()
            .then((posts) => this.sendResponse(res, posts))
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

    /**
     * Get Post Info By Given Id
     * @param id
     * @param res
     */
    static getById(id,res) {
        Post.findById(id)
            .then((post) => this.sendResponse(res, post))
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

    /**
     *  Create New Post.
     * @param req
     * @param res
     * @constructor
     */
    static Create( req, res) {
        let data = req.body;
        Post.create(data)
            .then(() => this.sendResponse(res, `تم إنشاء المنشور بنجاح!.`))
            .catch((error) => {
                return this.sendResponse(res, null, false, error, 404);
            });
    }

    /**
     * Update exist Post.
     * @param req
     * @param res
     * @constructor
     */
    static Update( req, res) {
        let data = req.body;
        let id = req.params.id;
        Post.update(data,{
            returning: true,
            plain: true,
            where: {
                id: id
            }
        })
            .then((data) => {
                if (data[1] > 0) this.sendResponse(res, `تم تحديث المنشور بنجاح!.`)
                this.sendResponse(res, `حدث خطا غير متوقع جرب مره اخري ..`,false);
            })
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

    /**
     * Delete exist Post.
     * @param id
     * @param res
     * @constructor
     */
    static Delete( id, res) {
         Post.destroy({where: {id: id} })
            .then(() => this.sendResponse(res, "تم حذف المنشور بنجاح!."))
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }
}