const { concat, cut3 } = require('./utilities/array_compute');
//const { sum, lgNum } = require('./utilities/array_reduce');

const testArray = [1, 2, 3, 66, 87, 95, 5, 13];
const anotherArray = [77, 34, 65, 32, 87, 55];

const concatArray = concat(testArray, anotherArray);
console.log(concatArray);

const finalArray = cut3(testArray);
console.log(finalArray);
