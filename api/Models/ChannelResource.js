export default (sequelize, DataTypes) => {
    return sequelize.define('ChannelResource',{
        id: {type:DataTypes.INTEGER,primaryKey: true },
        left: DataTypes.INTEGER,
        top: DataTypes.INTEGER,
        right: DataTypes.INTEGER,
        bottom: DataTypes.INTEGER,
        channel_type: DataTypes.INTEGER
    },
      {
        tableName:'ChannelResource'
    })
};