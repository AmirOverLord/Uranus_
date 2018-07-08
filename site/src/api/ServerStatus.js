import API from '../api/Api'

export default class ServerStatus extends API {
    constructor() {
      super();
    }

    static getStatus() {
       return this.getWithUrl('http://151.80.110.96/status.php')
         .then(({data,status}) => {
           if (!status) return false;
           let readyData = {
              server72: {},
              server94: {}
           };
           for ( let r of data) {
              let d = {
                Auth: {},
                Game: {},
                Patch: {}
              };

              for (let v of r.ports) {
                if (v.name === 'Auth') {
                  d.Auth = v;
                } else if (v.name === 'Game') {
                  d.Game = v;
                } else if (v.name === 'Patch') {
                  d.Patch = v;
                }
              }

              if (r.name === 'Server94') {
                 readyData.server94 = d;
              } else if (r.name === 'Server72') {
                readyData.server72 = d;
              }
           }
           return readyData;
         })
    }
}
