import Sequelize from 'sequelize';
import config from "../../Config/config";

const sequelize = new Sequelize(config.game.db.telecaster, config.game.connection.userName, config.game.connection.password, {
    host: config.game.connection.server,
    dialect: 'mssql',
    operatorsAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    }
});

const Character = sequelize.import("../Character");
const Guild = sequelize.import("../Guild");
const GuildMember = sequelize.import("../GuildMember");

export  {Character,Guild,GuildMember};