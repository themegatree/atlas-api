const getUniqueStudentData = (cohortData) => {
  const uniqueData = [cohortData[0]];
  cohortData.forEach(data => {
    if (uniqueData[uniqueData.length - 1].id !== data.id) {
      uniqueData.push(data);
    }
  }
  );
  return uniqueData;
};

module.exports = getUniqueStudentData;
