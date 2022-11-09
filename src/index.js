const {
  findPair,
  tryToParseArray } = require('./utils.js');

const DEFAULT_ARR = [2, 5, 1, 3, 4, 6, 7];
const DEFAULT_DESIRED_SUM = 8;

function main(arr = DEFAULT_ARR, desiredSum = DEFAULT_DESIRED_SUM) {

  if (!Number.isInteger(Number(desiredSum))) return;

  const intArray = tryToParseArray(arr);

  const pair = findPair(intArray, desiredSum);
  console.log(pair);

}

main([2, 5, 1, 3, 4, 6, 7], 8);