const constants = require("../../constants");

function getCount(transformData, value, key){
  let counter = 0;
  for(let i = 0; i < transformData.uniqueData.length; i++){      
    if(transformData.uniqueData[i][key] === value){
      counter++;
    }
  }
  return counter;
}

function getPercentage(transformData, count) {
  return  Math.round(100*count/transformData.uniqueData.length).toFixed(2);
}

function buildAttributeData(transformData,key) {
  const attributes = Object.values(constants[key]);
  const data = [];
  attributes.forEach(value => {
    const obj = {};
    const count = getCount(transformData, value, key);
    obj["type"] = value;
    obj["number"] = count;
    obj["percentage"] =  getPercentage(transformData,count);
    data.push(obj);
  }
  );
  return data;
}


module.exports = buildAttributeData;