const moment = require("moment-timezone")
const {toStringFromDate} = require("../middlewares/time_handler");
moment.locale('id-ID')

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('Opd', {
        id_opd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nama_opd: {
            type: DataTypes.STRING,
            defaultValue: "-",
            allowNull: false
        },
        alamat_opd: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "-"
        },
        id_kepala_opd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        lat_opd: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: -5.344282076
        },
        long_opd: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 105.0043158
        },
        edited_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        created_at: {
            type: DataTypes.STRING,
            defaultValue: toStringFromDate(moment.now()),
            allowNull: false
        },
        updated_at: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'opd',
        timestamps: false
    })
}