module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombres: {
            type: dataTypes.VARCHAR(60),
            allowNull: false
        },
        apellidos: {
            type: dataTypes.VARCHAR(60),
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        contraseña: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        createdAt: dataTypes.TIMESTAMP,
        updatedAt: dataTypes.TIMESTAMP,
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
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