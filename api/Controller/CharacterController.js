import Controller from './Controller'
import {Character,Guild,GuildMember} from '../Models/db/Telecaster'
import Sequelize from 'sequelize';

export default class CharacterController extends Controller {
    /**
     *  Constructor
     */
    constructor() {
        super();
    }

    static getAll(res) {
        let Op = Sequelize.Op;
        Character.findAll({
            order:[
                ['exp', 'DESC']
            ],
            where:{
                name:{
                    [Op.notLike]: '%@%'
                },
                permission: 0
            }
        })
            .then((characters) => {
                let data = [
                    {rows: characters, name: 'server94'},
                    {rows: [], name: 'top10'}
                ];
				
				let count = characters.length > 10 ? 10 : characters.length;

                for ( let i = 0; i < count; i++) {
                    data[1].rows[i] = characters[i];
                }
                 return this.setData(res,data);
            })
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

    static count(res) {
        let Op = Sequelize.Op;
        Character.findAndCount({
            where: {
               name: {
                   [Op.notLike]: '%@%'
               }
            }
        })
            .then((data) => {
                let send = {
                    server72: {
                        player: 0,
                        online: 0
                    },
                    server94: {
                        player: data.count,
                        online: 0
                    }
                };
                 for ( let row of data.rows) {
                     if ( row.login_time > row.logout_time) {
                         send.server94.online+=1;
                     }
                 }
                return this.sendResponse(res,send);
            })
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

    static getlimit(res,limit) {
        const Op = Sequelize.Op;
        Character.findAll({
            order:[
                ['exp', 'DESC']
            ],
            limit: limit,
            where:{
                name:{
                    [Op.notLike]: '%@%'
                },
                permission: 0
            }
        })
            .then((characters) => {return characters;})
            .catch((error) => this.sendResponse(res, null, false, error, 404));
    }

     static setData(res, data) {
         let ReadyData = {
             top10: [],
             server94: [],
             server72: []
         };

         for (let value of data) {
             let index = 0;
             let tmp = [];
             let name = value.name;

             for (let row of value.rows) {
                 let rowData = {name: '', lv: 0, class: 0, status: false, pk: 0, guild: {}, gender: 0};
                 rowData.rank = (index + 1);
                 rowData.name = row.name;
                 rowData.lv = row.lv;
                 rowData.class = row.job;
                 rowData.status = row.login_time > row.logout_time;
                 rowData.pk = row.pkc;
                 //rowData.guild = await this.getGuildName(row.sid);
                 rowData.gender = row.sex;
                 tmp[index] = rowData;
                 index++
             }

             if (name === 'top10') {
                 ReadyData.top10 = tmp;
             } else if (name === 'server94') {
                 ReadyData.server94 = tmp;
             } else {
                 ReadyData.server72 = tmp;
             }
             tmp = [];
         }
         return this.sendResponse(res, ReadyData);
     }

    static getGuildName(sid) {
        let data = {
            name: null,
            image: null,
            has: false
        };
        GuildMember.findOne({
            where:{
                player_id: sid,
                include:[
                    {model: Guild}
                ]
            }
        }).then((row) => {
            if ( row && row.guild_id) {
                Guild.findOne({
                    where:{
                        sid: row.guild_id
                    }
                }).then((guild) => {
                    if ( guild && guild.name) {
                        data.name = guild.name
                    }
                    if ( guild && guild.icon) {
                        data.image = guild.icon
                    }
                    return data;
                })
            } else {
                return data;
            }
        })
    }
}