const {Student} = require("../../models");

const backgroundRatio = async () => {
  const backgroundQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ["background"]
  });

  const total = backgroundQuery.count;
  const backgrounds = backgroundQuery.rows.map(row => row.background);    
  const uniqueBackground = backgrounds.filter((background, index) => {return index === backgrounds.indexOf(background);});
  const backgroundArr = [];

  uniqueBackground.forEach(background => backgroundArr.push({type: background, number: 0, percentage: 0}));

  backgroundArr.forEach(background => {
    const currentBackground = background.type;
    const numberOfCurrentBackground = backgrounds.filter(background => background === currentBackground);
    background.number = numberOfCurrentBackground.length;
    background.percentage = (numberOfCurrentBackground.length/total*100).toFixed(2).toString();
  });

  return backgroundArr;
};

module.exports = backgroundRatio;