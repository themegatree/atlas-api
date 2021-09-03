const constants = require("../../constants");

function getCount(uniqueData, value, key){
  let counter = 0;
  for(let i = 0; i < uniqueData.length; i++){      
    if(uniqueData[i][key] === value){
      counter++;
    }
  }
  return counter;
}

function getPercentage(uniqueData, count) {
  return  Math.round(100*count/uniqueData.length).toFixed(2);
}

function buildAttributeData(uniqueData,key) {
  const attributes = Object.values(constants[key]);
  const data = [];
  attributes.forEach(value => {
    const obj = {};
    const count = getCount(uniqueData, value, key);
    obj["type"] = value;
    obj["number"] = count;
    obj["percentage"] =  getPercentage(uniqueData,count);
    data.push(obj);
  }
  );
  return data;
}


module.exports = buildAttributeData;