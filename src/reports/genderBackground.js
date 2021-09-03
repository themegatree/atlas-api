function GenderAndBackgroundPercentage(transformData, value, key){
 
    let counter = 0

    for(let i = 0; i <transformData.uniqueData.length; i++){
        
        if(transformData.uniqueData[i].gender === value){
            counter ++
        }
    }
    return counter
}


function AttributeCount(transformData,keys) {
const attributes = Object.values(keys);


attributes.forEach(values => {GenderAndBackgroundPercentage(transformData, values);
    // console.log(keys)
    // console.log(GenderAndBackgroundPercentage(transformData, keys));
  }
  );
}

module.exports = AttributeCount