const { tableName } = require("sequelize/lib/model");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombres: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        apellidos: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        contraseña: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        linkImagen: {
            type: dataTypes.STRING(1000),
            allowNull: false
        },
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false,
        tableName: 'usuarios'
    }
    const Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = function (models) {
        Usuario.belongsToMany(models.Terapeuta, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "terapeuta",
            through: 'terap_usuarios',
            foreignKey: 'id_usuario',
            otherKey: 'id_terapeuta',
            timestamps: true
        })
    }

    return Usuario;
};