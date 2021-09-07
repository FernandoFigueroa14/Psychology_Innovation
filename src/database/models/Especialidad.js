module.exports = (sequelize, dataTypes) => {
    let alias = 'Especialidad'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        especialidad: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        }};
    let config = {
        timestamps: false,
        deletedAt: false
    }
    const Especialidad = sequelize.define(alias,cols,config);

    // Especialidad.associate = function (models) {
    //     Especialidad.belongsTo(models.Genre, { // models.Genre -> Genres es el valor de alias en genres.js
    //         as: "genre",
    //         foreignKey: "genre_id"
    //     })

    //     Especialidad.belongsToMany(models.Actor, { // models.Actor -> Actors es el valor de alias en actor.js
    //         as: "actors",
    //         through: 'actor_movie',
    //         foreignKey: 'movie_id',
    //         otherKey: 'actor_id',
    //         timestamps: false
    //     })
    // }

    return Especialidad
};