const { Sequelize, DataTypes } = require('sequelize');

const instalacion = (sequelize) => {
    const instalacion = sequelize.define('instalacion', {
            capacidad_subestacion: {
                type: DataTypes.INTEGER,
            },
            capacidad_generador: {
                type: DataTypes.INTEGER
            },
            carga_a_solicitar: {
                type: DataTypes.INTEGER
            },
            clasificacion_instalacion: {
                type: DataTypes.STRING
            },
            conexion_subestacion: {
                type: DataTypes.STRING
            },
            capacidad_subestacion: {
                type: DataTypes.INTEGER
            },
            nombre_pro: {
                type: DataTypes.STRING
            },
            nro_hojas: {
                type: DataTypes.INTEGER
            },
            nro_niveles: {
                type: DataTypes.INTEGER
            },
            nro_servicio_a_instalar: {
                type: DataTypes.INTEGER
            },
            nro_transformadores: {
                type: DataTypes.INTEGER
            },
            nro_tablero: {
                type: DataTypes.INTEGER
            },
            tension_suministro: {
                type: DataTypes.INTEGER
            },
            tipo_servicio: {
                type: DataTypes.INTEGER
            },
        },
        {
            freezeTableName: true
        });

    return instalacion;
}

module.exports = instalacion;
