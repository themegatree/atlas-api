const { Student } = require("../../models"); 

const countStudents = async () => {
  return await Student.count();
};

module.exports = countStudents;