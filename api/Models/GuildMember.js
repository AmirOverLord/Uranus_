export default (sequelize, DataTypes) => {
    return sequelize.define('GuildMember',{
            player_id: {
                type:DataTypes.INTEGER,
                primaryKey: true
            },
            guild_id: DataTypes.INTEGER,
            prev_guild_id: DataTypes.INTEGER,
            guild_block_time: DataTypes.DATE,
            permission: DataTypes.INTEGER,
            memo: DataTypes.STRING
        },
        {
            tableName:'GuildMember'
        })
};