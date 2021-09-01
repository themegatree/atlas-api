const db = require("../models");

const truncateTables = async () => {
  console.log("truncating tables");
  await db.Cohort.destroy({ truncate: true, cascade: true });
  await db.Student.destroy({ truncate: true, cascade: true });
};

module.exports = truncateTables;
