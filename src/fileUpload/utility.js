function checkArraysAreEqual (arr1, arr2) {
  if (![arr1, arr2].every(array => Array.isArray(array))) {
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
