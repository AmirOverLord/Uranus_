import md5 from 'js-md5';
import jwt from 'jsonwebtoken';
import config from '../Config/config';

export default class Controller {

    /**
     *  Send Response to front end side
     * @param res
     * @param data
     * @param success
     * @param errors
     * @param status
     * @returns {Promise<void>}
     */
    static async sendResponse(res, data = null, success = true, errors = null, status = 200) {
        let encodeData = await this.encode(data, success, errors, status);
        res.status(status);
        res.json({
            token: encodeData
        });
    }

    /**
     *  Encode Data using json web token
     * @param data
     * @param success
     * @param errors
     * @param status
     * @returns {*}
     */
    static encode(data = null, success = true , errors = null,status = 200) {
        return jwt.sign({
            status:status,
            success:success,
            errors:errors,
            data:data
        },
          config.secret_key
        );
    }

    /**
     *  Decode data using json web token
     * @param data
     * @return decode Data
     * @error false
     */
    static decode(data) {
        jwt.verify(data,config.secret_key,(error,decode) => {
            if (error) {
                return false
            } else {
                return decode
            }
        });
    }

    /**
     *  Hash password using md5 lib
     * @param value
     */
    static hash(value) {
        return md5(`${config.game.md5_key}${value}`);
    }

    /**
     *  Compare password using md5 lib
     * @param text
     * @param hashed
     * @returns {boolean}
     */
    static hashCompare(text,hashed) {
        return md5(`${config.game.md5_key}${text}`) === hashed;
    }

    /**
     *  Create login token
     * @param user
     * @param expires
     * @returns {*}
     */
    static loginToken(user, expires = '24h') {
        return jwt.sign({
            email: user.email,
            account: user.account,
            permission: user.Admin,
            account_id: user.account_id
         }, config.secret_key ,{
            expiresIn: expires
        });
    }

    /**
     *  Check for login user
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     * @constructor
     */
    static LoginRequired( req, res, next) {
        if (req.user) {
            next();
        } else {
            return this.sendResponse(res,'غير مسموح لك بالتواجد هنا..',true,null,401);
        }
    }
}