import API from '../../src/api/Api'

export default class Post extends API {

  constructor() {
    super();
  }

  /**
   *  Create New Post On Server
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  static create(data) {
    return this.post('/post',data)
      .then((res) => {
        if (!res.success) return false;
        return res.data;
      })
      .catch((error) => {
        return error.response;
      })
  }

  /**
   *  Get All Post
   * @returns {Promise<AxiosResponse<any>>}
   */
  static getAll() {
    return this.get('/post')
      .then((res) => {
        if (!res.success) return false;
        return res.data;
      });
  }

  /**
   *  Get Post by id
   * @param id
   * @return {Promise<AxiosResponse<any>>}
   */
   static find(id) {
     return this.get(`/post/${id}`)
       .then((res) => {
         if (!res.success) return false;
         return res.data;
       })
       .catch((error) => {
         return error.response;
       })
   }

  /**
   *  Update Post by id
   * @param id
   * @param data
   * @returns {Promise<any>}
   */
  static update(id,data) {
    return this.put(`/post/${id}`,data)
      .then((res) => {
        if (!res.success) return res;
        return res.data;
      })
      .catch((error) => {
        return error.response;
      })
  }

  /**
   *  Delete Post by id
   * @param id
   * @returns {Promise<any>}
   */
  static destroy(id) {
    return this.delete(`/post/${id}`)
      .then((res) => {
        if (!res.success) return false;
        return res.data;
      })
      .catch((error) => {
        return error.response;
      })
  }

}
