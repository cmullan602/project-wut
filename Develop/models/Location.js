const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// adding a model for "Location"
class Location extends Model {}

// creating columns and fields (id, location name) for the "Location" model
Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;