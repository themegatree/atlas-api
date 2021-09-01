function checkArraysAreEqual (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((el, index) => el === arr2[index]);
}

module.exports = {
  checkArraysAreEqual: checkArraysAreEqual
};
