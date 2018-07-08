export default (sequelize, DataTypes) => {
    return sequelize.define('Guild',{
            sid: {
                type:DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING,
            notice: DataTypes.STRING,
            url: DataTypes.STRING,
            icon_size: DataTypes.INTEGER,
            icon: DataTypes.STRING,
            banner_size: DataTypes.INTEGER,
            advertise_type: DataTypes.STRING,
            advertise_end_time: DataTypes.DATE,
            advertise_comment: DataTypes.STRING,
            recruiting: DataTypes.INTEGER,
            min_recruit_level: DataTypes.INTEGER,
            max_recruit_level: DataTypes.INTEGER,
            name_changed: DataTypes.INTEGER,
            dungeon_id: DataTypes.INTEGER,
            dungeon_block_time: DataTypes.BIGINT,
            gold: DataTypes.BIGINT,
            chaos: DataTypes.INTEGER,
            alliance_id: DataTypes.INTEGER,
            alliance_block_time: DataTypes.BIGINT,
            donation_point: DataTypes.INTEGER,
            permission_name_1: DataTypes.STRING,
            permission_set_1: DataTypes.INTEGER,
            permission_name_2: DataTypes.STRING,
            permission_set_2: DataTypes.INTEGER,
            permission_name_3: DataTypes.STRING,
            permission_set_3: DataTypes.INTEGER,
            permission_name_4: DataTypes.STRING,
            permission_set_4: DataTypes.INTEGER,
            permission_name_5: DataTypes.STRING,
            permission_set_5: DataTypes.INTEGER,
            permission_name_6: DataTypes.STRING,
            permission_set_6: DataTypes.INTEGER,
        },
        {
            tableName:'Guild'
        })
};