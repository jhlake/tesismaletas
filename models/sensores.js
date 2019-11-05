'use strict';
module.exports = (sequelize, DataTypes) => {
  const sensores = sequelize.define('sensores', {
    lectura_ID: {type:DataTypes.INTEGER, primaryKey:true},
    sensor: DataTypes.STRING,
    value: DataTypes.STRING,
    unit: DataTypes.STRING,
    time: DataTypes.STRING
  }, {timestamps: false});

  return sensores;
};