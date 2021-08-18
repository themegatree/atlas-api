'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cohort extends Model {
<<<<<<< HEAD
    
    static associate(models) {

      this.Students = this.hasMany(models.Student)
      
    }
  };
  Cohort.init({
    name: DataTypes.STRING,
    startDate: DataTypes.DATE
=======
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cohort.init({
    name: DataTypes.STRING
>>>>>>> 247ca7e (added file checks)
  }, {
    sequelize,
    modelName: 'Cohort',
  });
  return Cohort;
};