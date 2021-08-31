
const pick = (obj, keys) => 
Object.keys(obj)
  .filter(i => keys.includes(i))
  .reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

// Test code
const data = { a: 1, b: 2, c: 3 };
console.log(pick(data, ['a', 'c']));