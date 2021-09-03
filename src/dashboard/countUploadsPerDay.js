
const countUploadsPerDay = (fileUploadDates, numberOfDays) => {
  let uploads = createDatesObject(numberOfDays);
  for (let i=0; i<fileUploadDates.length; i++) {
    let formattedDate = fileUploadDates[i].toLocaleDateString();
    uploads[formattedDate] += 1;
  }
  return Object.values(uploads).reverse();
};

const createDatesObject = (numberOfDays) => {
  let datesObj = {};
  for (let i=0; i<numberOfDays; i++) {
    let date = new Date();
    date.setDate(date.getDate() - i);
    date = date.toLocaleDateString();
    datesObj[date] = 0;
  }
  return datesObj;
};

module.exports = countUploadsPerDay;