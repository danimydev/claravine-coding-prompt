const {
  findPair, 
  containsOnlyPositive, 
  containsUniqueIntegers, 
  parseToIntArray} = require('./utils.js');

const DEFAULT_ARR = [2,5,1,3,4,6,7];
const DEFAULT_DESIRED_SUM = 8;

function main(arr = DEFAULT_ARR, desiredSum = DEFAULT_DESIRED_SUM){
  
  if(!Number.isInteger(Number(desiredSum))) return;

  const intArray = parseToIntArray(arr);
  if(!containsOnlyPositive(intArray)) return;
  if(!containsUniqueIntegers(intArray)) return;
  
  const pair = findPair(intArray, desiredSum);
  console.log(pair);
  
}

main([2,5,1,3,4,6,7], 8);