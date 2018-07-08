import Controller from './Controller'
import Config from '../Config/config'
import PostScan from 'portscanner'

export default class StatusController extends Controller {
    constructor() {
        super();
    }

    static getStatus(res) {
        let data = Config.game;
        let status = [
            {name: 'Auth', ip: data.auth_bin.ip, port: data.auth_bin.port, status: false},
            {name: 'Game', ip: data.game_bin.ip, port: data.game_bin.port, status: false},
            {name: 'Patch', ip: data.patch_bin.ip, port: data.patch_bin.port, status: false}
        ];

        for ( let v of data) {
            let index = 0;
            PostScan.checkPortStatus(v.port,v.ip)
                .then((port) => {
                    status[index].status = port === 'open';
                });
            index++
        }
        return this.sendResponse(res,status);
    }
}