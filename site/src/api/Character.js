import API from '../../src/api/Api'
import Config from '../Config'

export default class Character extends API {
    constructor() {
      super();
    }

    static gettest() {
      return this.get('/character/all')
        .then((res) => {
          if (!res.success) return false;
          console.log(res.data);
          return res.data;
        })
    }
  /**
   *  Get Players
   * @returns {Promise<AxiosResponse<any>>}
   */
  static getTop() {
      return this.get('/character/all')
          .then((res) => {
              let data = {
               top10: [],
               server94: [],
               server72: [],
               tmp: []
             };

             for (let key of Object.keys(res.data)) {
               let rows = res.data[key];
               let index = 0;
               for (let row of rows) {
                 let rowData = {rank:0,name: '', lv: 0, class: 0, status: false, pk: 0, guild: {}, gender: 0};
                 rowData.rank = row.rank;
                 rowData.name = row.name;
                 rowData.lv = row.lv;
                 rowData.class = row.class;
                 rowData.status = row.status;
                 rowData.pk = row.pk;
                 //rowData.guild = this.getGuild(row.guild);
                 rowData.gender = row.gender;
                 data.tmp[index] = rowData;
                 index++
               }
               if (key === 'top10') {
                 data.top10 = data.tmp;
               } else if (key === 'server94') {
                 data.server94 = data.tmp;
               } else {
                 data.server72 = data.tmp;
               }
               data.tmp = [];
             }
             return data;
          });
    }

  /**
   *  Get All Player Count on Server
   * @returns {Promise<AxiosResponse<any>>}
   */
    static count() {
      return this.get('/character/count')
        .then((res) => {
          if (!res.success) return false;
          return res.data;
        })
    }

  /**
   *  Get Job Image , ToDo : add the left jobs value to ( Jobs Array ).
   * @param job_id
   * @param status
   * @returns {string}
   */
    static getJobImage(job_id,status) {
        let jobs = [
          {id: 100, image: {online: 'common_mark_job_0033', offline: 'common_mark_job_0033_off'}},
          {id: 100, image: {online: 'common_mark_job_0033', offline: 'common_mark_job_0033_off'}},
        ];

        for ( let job of jobs) {
           if (job.id === job_id) {
             let image = status ? `${job.image.online}.jpg` : `${job.image.offline}.jpg`;
              return `./static/img/${image}`;
           }
        }
    }

  /**
   *  Get Sex Image
   * @param gender_id
   * @returns {string}
   */
    static getGenderImage(gender_id) {
        return gender_id === 1 ? 'female.png' : 'male.png';
    }

  /**
   *  Get Guild Format To Display
   * @param guild
   * @returns {string}
   */
    static getGuild(guild) {
        if (guild.has) {
           let data = '';
            if (guild.image != null) {
               data = `<span><img src="${Config.url.guild_icon}/${guild.image}"></span>`;
            }
            if (guild.name != null) {
              data = `${data} <span>${guild.name}</span>`;
            }
            return data;
        }
        return 'لاينتمي الي كتيبة';
    }

    static getStatusImage(status) {
       return status ? 'online.png' : 'offline.png';
    }

}
