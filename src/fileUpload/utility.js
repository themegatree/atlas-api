function checkArraysAreEqual (arr1, arr2) {
  if (typeof arr2 !== "object") {
    return false;
  }
  else if ( arr1.length !== arr2.length) {
    return false;
  }
  else {
    return arr1.every((el, index) => el === arr2[index]);
  }
}

module.exports = {
  checkArraysAreEqual: checkArraysAreEqual
};
