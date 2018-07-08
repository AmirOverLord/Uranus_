export default (sequelize, DataTypes) => {
    return sequelize.define('Posts',{
            id: {
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: DataTypes.STRING,
            type: DataTypes.STRING,
            body: DataTypes.TEXT,
            image: DataTypes.STRING
        },
        {
            tableName:'Posts'
        })
};