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

    // Terapeuta.associate = function (models) {
    //     Terapeuta.belongsTo(models.Genre, { // models.Genre -> Genres es el valor de alias en genres.js
    //         as: "genre",
    //         foreignKey: "genre_id"
    //     })

    //     Terapeuta.belongsToMany(models.Actor, { // models.Actor -> Actors es el valor de alias en actor.js
    //         as: "actors",
    //         through: 'actor_movie',
    //         foreignKey: 'movie_id',
    //         otherKey: 'actor_id',
    //         timestamps: false
    //     })
    // }

    return Terapeuta
};