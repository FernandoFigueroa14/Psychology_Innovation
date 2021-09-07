module.exports = (sequelize, dataTypes) => {
    let alias = 'Terapeuta'; // esto debería estar en singular
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
        cedula: {
            type: dataTypes.INT,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.VARCHAR(200),
            allowNull: false
        },
        linkVideo: {
            type: dataTypes.VARCHAR(1000),
            allowNull: false
        },
        linkTitulo: {
            type: dataTypes.VARCHAR(1000),
            allowNull: false
        },
        linkImagen: {
            type: dataTypes.VARCHAR(1000),
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
    const Terapeuta = sequelize.define(alias,cols,config);

    Terapeuta.associate = function (models) {
        Terapeuta.belongsToMany(models.Especialidad, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "especialidad",
            through: 'terap_especialidades',
            foreignKey: 'id_terap',
            otherKey: 'id_especialidad',
            timestamps: false
        });

        Terapeuta.belongsToMany(models.Usuario, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "usuario",
            through: 'terap_usuarios',
            foreignKey: 'id_terapeuta',
            otherKey: 'id_usuario',
            timestamps: false
        });
    }

    return Terapeuta;
};