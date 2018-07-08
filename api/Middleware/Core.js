import Validate from 'express-validation';
import jwt from "jsonwebtoken";
import config from "../Config/config";

export default class Middleware {
    /**
     *  check for user login.
     * @param req
     * @param res
     * @param next
     * @constructor
     */
    static User(req, res, next) {
        if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT' ) {
            jwt.verify(req.headers.authorization.split(' ')[1],config.secret_key,(error, decode) =>{
                if (error) req.user = undefined;
                req.user = decode;
                next();
            });
        } else {
            req.user = undefined;
            next();
        }
    }

    /**
     *  Secret API
     * @param req
     * @param res
     * @param next
     * @constructor
     */
    static APISecret(req, res, next) {
        if (req.headers && req.headers.origin && req.headers.origin === 'http://localhost:8080') {
            next();
            /*jwt.verify(req.headers.apisecret,config.secret_key,(error, decode) =>{
                if (error) {
                    res.status(401);
                    res.json('Access Forbidden!.');
                } else {
                    if (decode.key === config.app_key) {
                        next();
                    } else  {
                        res.status(401);
                        res.json('Un valid Access key!.');
                    }
                }
            });*/
        } else {
            res.status(401);
            res.json('Access Forbidden!.');
        }
    }

    static Permission() {

    }

}
