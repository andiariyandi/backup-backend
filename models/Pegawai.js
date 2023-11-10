const moment = require("moment-timezone");
const {toStringFromDate} = require("../middlewares/time_handler");
moment.locale('id-ID')

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('Pegawai', {
        id_pegawai: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nama_pegawai: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "-"
        },
        nip_pegawai: {
            type: DataTypes.STRING,
            max: 20,
            allowNull: false
        },
        id_opd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        id_jabatan: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        id_pangkat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        id_atasan: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: this.nip_pegawai
        },
        level: {
            type: DataTypes.ENUM({
                values: ["ADMIN", "PERMITOR", "VERIFIKATOR", "USER"],
                default: "USER"
            }),
            allowNull: false,
            defaultValue: "USER"
        },
        url_foto_pegawai: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tukin: {
            type: DataTypes.BIGINT,

        },
        first_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
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
        tableName: 'pegawai',
        timestamps: false
    })
}