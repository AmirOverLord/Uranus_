import Sequelize from 'sequelize';
import config from "../../Config/config";

const sequelize = new Sequelize(config.game.db.billing, config.game.connection.userName, config.game.connection.password, {
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
        timestamps: false
    }
});

//const ChannelResource = sequelize.import("../ChannelResource");

export  {};