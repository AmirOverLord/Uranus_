import jwt from 'jsonwebtoken'
import config from "../../../api/Config/config";

export  default class Auth {

    /**
     *  Login user by save user data to localStorage
     * @param user
     */
    static login(user) {
      let saveUser = {
         token: user.token,
         role: user.permission
      };

      localStorage.setItem('User',JSON.stringify(saveUser));
    }

    /**
     *  Logout user by remove user localStorage data
     */
    static logout() {
      localStorage.removeItem('User');
    }

    /**
     *  Get Login user data
     * @return {*}
     */
    static getUser() {
      let User = this.decode(this.getToken().token,true);
       if (User) return User;
       return false;
    }

    /**
     *  Get User Saved Token
     * @return {*}
     */
    static getToken() {
      let user = JSON.parse(localStorage.getItem('User'));
        if (user) {
          return user;
        }
         return false;
    }

    /**
     *  Verify login User
     * @param roles
     * @return {boolean}
     */
    static check(roles = null) {
      let user = this.getToken();

      if (!user || !user.token) return false;

      let decUser = this.decode(user.token,true);

      if (!decUser) return false;

      if (decUser && !roles) return true;

      return roles.includes(user.role);
    }

    /**
     *  Decode data using json web token
     * @param data
     * @param type
     * @return decode Data
     * @error false
     */
    static decode(data,type) {
      return jwt.verify(data,config.secret_key,(error,decode) => {
        if (error) {
          return false
        } else {
          if (type) return decode;
          return true
        }
      });
    }
}
