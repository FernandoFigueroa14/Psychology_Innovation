module.exports = (sequelize, dataTypes) => {
    let alias = 'Especialidad'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        especialidad: {
            type: dataTypes.STRING(100),
            allowNull: false
        }};
    let config = {
        timestamps: false,
        deletedAt: false,
        tableName: 'especialidades'
    }
    const Especialidad = sequelize.define(alias,cols,config);

    Especialidad.associate = function (models) {

        Especialidad.belongsToMany(models.Terapeuta, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "terapeuta",
            through: 'terap_especialidades',
            foreignKey: 'id_especialidad',
            otherKey: 'id_terap',
            timestamps: false
        })
    };

    return Especialidad;
};