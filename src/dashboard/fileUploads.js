const { UploadHistory } = require("../../models");
const { Op } = require("sequelize");
const countUploadsPerDay = require("./countUploadsPerDay");

const fileUploads = async () => {
  let date = new Date();
  date.setDate(date.getDate()-6);
  date.setUTCHours(0,0,0,0);

  const uploadQuery = await UploadHistory.findAll({
    raw: true,
    attributes: ["uploadType", "createdAt"],
    where: {
      status: "success",
      createdAt: {
        [Op.gt]: date
      }
    }
  });
  const uploadTypes = uploadQuery.map(row => row.uploadType);
  const uniqueUploadTypes = uploadTypes.filter((uploadType, index) => uploadTypes.indexOf(uploadType) === index);
  const fileUploads = [];
  for (let i=0; i<uniqueUploadTypes.length; i++) {
    const currentTypeUploads = uploadQuery.filter((row) => row.uploadType === uniqueUploadTypes[i]).map(row => row.createdAt); 
    let uploads = countUploadsPerDay(currentTypeUploads, 7);
    fileUploads.push({type: uniqueUploadTypes[i], uploads: uploads});
  }
  return fileUploads;
};

module.exports = fileUploads;