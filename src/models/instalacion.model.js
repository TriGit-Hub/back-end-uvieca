const {Sequelize, DataTypes} = require('sequelize');

const instalacion = (sequelize) => {
    const instalacion = sequelize.define('instalacion', {
            capacidad_subestacion: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            conexion_subestacion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            capacidad_generador: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            carga_a_solicitar: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            clasificacion_instalacion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nombre_pro: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nro_hojas: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            nro_niveles: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            nro_servicio_a_instalar: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            nro_transformadores: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            nro_tablero: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tension_suministro: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tipo_servicio: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });

    return instalacion;
}

module.exports = instalacion;
