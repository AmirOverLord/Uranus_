import axios from 'axios'
import  jwt from 'jsonwebtoken'
import config from '../Config'

export default class Api {

    constructor() {
    }

  /**
   *  Send Get Request with custom url
   * @param url
   * @returns {Promise<AxiosResponse<any>>}
   */
      static getWithUrl(url) {
        return axios.get(url)
          .then((response) => {
            return Promise.resolve(response);
          })
          .catch((error) => {return Promise.reject(error)});
      }

   /**
   *  Send Get Request To Server with default prefix url
   * @param url
   * @returns {Promise<AxiosResponse<any>>}
   */
    static get(url) {
      return axios.get(`${config.url.api_test}${url}`)
        .then((response) => {
          return Promise.resolve(this.decode(response))
        })
        .catch((error) => {
          return Promise.reject(error)
        });
    }

  /**
   *  Send Post Request To Server
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
    static post(url,data) {
      return axios.post(`${config.url.api_test}${url}`,data)
        .then((response) => {
          return Promise.resolve(this.decode(response))
        })
        .catch((error) => {
          return Promise.reject(error)
        });
    }

  /**
   *  Send Put Request To Server
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
    static put(url,data) {
      return axios.put(`${config.url.api_test}${url}`,data)
        .then((response) => {
          return Promise.resolve(this.decode(response))})
        .catch((error) => {
          return Promise.reject(error)
        });
    }

  /**
   *  Send Delete Request To Server
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
    static delete(url) {
      return axios.delete(`${config.url.api_test}${url}`)
        .then((response) => {
          return Promise.resolve(this.decode(response))
        })
        .catch((error) => {
          return Promise.reject(error)
        });
    }

  /**
   *  Send Patch Request To Server
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
    static patch(url,data) {
      return axios.patch(`${config.url.api_test}${url}`,data)
        .then((response) => {
          return Promise.resolve(this.decode(response))
        })
        .catch((error) => {
          return Promise.reject(error)
        });
    }

  /**
   *  Encode Data using Secret Key
   * @param data
   * @returns {*}
   */
    static encode(data) {
      return jwt.sign({data},
        config.secret_key
      );
    }

  /**
   *  Decode Data using Secret key
   * @param response
   */
    static decode(response) {
       return jwt.verify(response.data.token,config.secret_key,(error,decode) => {
            if (error) {
               return false
            } else {
               return decode
            }
       });
    }
}
