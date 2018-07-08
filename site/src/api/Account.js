import API from '../../src/api/Api'

export default class Account extends API {

    constructor() {
      super();
    }

  /**
   *  Create New Account On Server
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  static create(data) {
      return this.post('/account',data)
          .then((res) => {
              if (!res.success) return false;
               return res.data;
          })
        .catch((error) => {
           return error.response;
        })
    }

  /**
   *  Get All Account Count
   * @returns {Promise<AxiosResponse<any>>}
   */
    static count() {
      return this.get('/account/count')
         .then((res) => {
           if (!res.success) return false;
            return res.data;
         })
    }

}
