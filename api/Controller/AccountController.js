import Controller from './Controller';
import {Account} from '../Models/db/Auth';
import Sequelize from 'sequelize';

export default class AccountController extends Controller {

    /**
     * Constructor.
     */
    constructor() {
      super();
    }

    /**
     * Get All Users Info.
     * @param res
     */
    static getAll(res) {
        Account.findAll()
            .then((accounts) => this.sendResponse(res, accounts))
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

    /**
     * Get User Info By Given Id
     * @param id
     * @param res
     */
     static getById(id,res) {
        Account.findById(id)
            .then((account) => this.sendResponse(res, account))
            .catch((error) => this.sendResponse(res, null, false, error, 404));
     }

    /**
     * Login User.
     * @param req
     * @param res
     * @constructor
     */
    static Login( req, res) {
        let data = req.body;
         Account.findOne({
                    where: {
                        account: data.account
                    }
         })
             .then((user) => {
                 if (user) {
                     /// match username
                     if (this.hashCompare(data.password,user.password)) {
                         return this.sendResponse(res,{
                             token:`${this.loginToken(user,'12h')}`,
                             permission: user.Admin === 100 ? 'Admin' : null
                         });
                     }
                     /// Wrong Password.
                     return this.sendResponse(res,null,false,`Invalid User [ ${user.account} ] or Password.`);
                 }
                 /// no match user (invalid user)
                 return this.sendResponse(res,null,false,`User [ ${data.account} ] Not Found.`,404);
             }) /// Server Error (DB)
             .catch((error) => this.sendResponse(res,null, false,error,500));
    }

    /**
     *  Create New User.
     * @param req
     * @param res
     * @constructor
     */
    static Create( req, res) {
        const Op = Sequelize.Op;
        let decodeData = req.body;
        let data = {
            account: decodeData.account,
            email: decodeData.email,
            password: this.hash(decodeData.password),
            password2: this.hash(decodeData.password)
        };
            Account.findOne({
                where: {
                   [Op.or]: [
                       {account: data.account},
                       {email: data.email}
                   ]
                }
            }) .then((user) => {
                if (user) {
                    return this.sendResponse(res, 'أسم المستخدم او البريد مستخدم من قبل؛ جرب بريد واسم اخر .')
                } else {
                    Account.create(data)
                        .then((user) => this.sendResponse(res, `تم إنشاء حسابك  [ ${user.account} ] بنجاح!. `))
                }
            })
             .catch((error) => {
                 return this.sendResponse(res, null, false, error, 500);
             });
    }

    /**
     * Get Account Count
     * @param res
     */
    static count(res) {
        const Op = Sequelize.Op;
        Account.findAndCount({
            where: {
                account_id: {
                    [Op.gt]: 0
                }
            }
        })
            .then((data) => {
                let send = {
                    server72: 0,
                    server94: data.count
                };
                return this.sendResponse(res,send);
            })
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }
    /**
     * Update exist User.
     * @param req
     * @param res
     * @constructor
     */
    static Update( req, res) {
        let data = req.body;
        let id = req.params.id;
        Account.update(data,{where: {account_id: id} })
            .then((user) => this.sendResponse(res, `User [ ${user.account} ] Has Been Updated!.`))
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

    /**
     * Delete exist User.
     * @param id
     * @param res
     * @constructor
     */
    static Delete( id, res) {
        Account.destroy({where: {account_id: id} })
            .then(() => this.sendResponse(res, "User Has been Deleted."))
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }
}