export default (sequelize, DataTypes) => {
    return sequelize.define('Account',{
            account_id: {
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            account: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            password2: DataTypes.STRING,
            block: DataTypes.INTEGER,
            IP_user: DataTypes.STRING,
            last_login_server_idx: DataTypes.INTEGER,
            Admin: DataTypes.INTEGER,
            point: DataTypes.INTEGER,
            datePassword: DataTypes.DATE
        },
        {
            tableName:'Account'
        })
};