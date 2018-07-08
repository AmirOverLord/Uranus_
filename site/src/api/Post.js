import API from '../../src/api/Api'

export default class Post extends API {

  constructor() {
    super();
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
}
