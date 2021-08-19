const db = require("../models");

const truncateTables = async () => {
<<<<<<< HEAD
  console.log("truncating tables");
  await db.Cohort.destroy({ truncate: true, cascade: true });
  await db.Student.destroy({ truncate: true, cascade: true });
  await db.UploadHistory.destroy({truncate: true, cascade: true});
};
=======
  console.log('truncating tables')
  await db.Cohort.destroy({ truncate: true, cascade: true })
  await db.Student.destroy({ truncate: true, cascade: true })
  await db.UploadHistory.destroy({truncate: true, cascade: true})
  await db.ModuleChallenge.destroy({truncate: true, cascade: true})
  await db.SelfAssessment.destroy({truncate: true, cascade: true})
}
>>>>>>> 6b7b3a9 (committing on AT-34)

module.exports = truncateTables;
