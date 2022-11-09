function containsOnlyPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value <= 0) return false;
  }
  return true;
}

function containsUniqueIntegers(arr) {
  const freqMap = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (freqMap[value]) return false;
    else freqMap[value] = true;
  }
  return true;
}

function parseToIntArray(arr){
  const parsedArr = [...arr];
  for(let i = 0; i < arr.length; i++){
    const value = Number(arr[i]);
    if(!Number.isInteger(value)) return null;
    else parsedArr[i] = value;
  }
  return parsedArr;
}

function findPair(arr, desiredSum) {

  const intArray = parseToIntArray(arr);
  
  if(!containsOnlyPositive(intArray)) return null;
  if(!containsUniqueIntegers(intArray)) return null;
  
  let a = Infinity, b;
  for(let i = 0; i < intArray.length; i++){
    const first = intArray[i];
    const needed = desiredSum - first;
    for(let j = 0; j < intArray.length; j++){
      const second = intArray[j];
      if(second === needed && first < a){
        a = first;
        b = second;
      }
    }
  }
  if(a === Infinity) return null;
  return [a, b];
}

module.exports = {
  containsOnlyPositive,
  containsUniqueIntegers,
  parseToIntArray,
  findPair,
}