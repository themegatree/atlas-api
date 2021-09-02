const { UploadHistory } = require("../../models");
const constants = require("../../constants");
const createDate = (daysAgo) => {
  let date = new Date();
  return date.setDate(date.getDate() - daysAgo);
};
const createUploads = async () => {
  console.log("creating uploads");
  await UploadHistory.bulkCreate( [
    {
      id: 1,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(10),
      updatedAt: createDate(10)
    },
    {
      id: 2,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(1),
      updatedAT: createDate(1)
    },
    {
      id: 3,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(2),
      updatedAT: createDate(2)
    },
    {
      id: 4,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(3),
      updatedAT: createDate(3)
    },
    {
      id: 5,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(3),
      updatedAT: createDate(3)
    },
    {
      id: 6,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(4),
      updatedAT: createDate(4)
    },
    {
      id: 7,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(5),
      updatedAT: createDate(5)
    },
    {
      id: 8,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "success",
      createdAt: createDate(6),
      updatedAT: createDate(6)
    },
    {
      id: 9,
      uploadType: constants.fileUploadTypes.selfAssessment,
      status: "failed",
      createdAt: createDate(6),
      updatedAT: createDate(6)
    },
    {
      id: 10,
      uploadType: constants.fileUploadTypes.moduleChallenge,
      status: "success",
      createdAt: createDate(5),
      updatedAT: createDate(5)
    },
    {
      id: 11,
      uploadType: constants.fileUploadTypes.moduleChallenge,
      status: "success",
      createdAt: createDate(4),
      updatedAT: createDate(4)
    }
  ]);
};

module.exports = createUploads;