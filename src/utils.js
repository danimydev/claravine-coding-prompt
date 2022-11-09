function tryToParseArray(arr) {

  const parsedArr = [...arr];
  const freqMap = {};

  for (let i = 0; i < arr.length; i++) {
    const value = Number(arr[i]);

    if (!Number.isInteger(value) || value <= 0 || freqMap[value]) {
      return [];
    } else {
      parsedArr[i] = value;
      freqMap[value] = true;
    }

  }
  return parsedArr;
}

function findPair(arr, desiredSum) {

  const intArray = tryToParseArray(arr);

  let a = Infinity, b;
  for (let i = 0; i < intArray.length; i++) {
    const first = intArray[i];
    const needed = desiredSum - first;
    for (let j = 0; j < intArray.length; j++) {
      const second = intArray[j];
      if (second === needed && first < a) {
        a = first;
        b = second;
      }
    }
  }
  if (a === Infinity) return null;
  return [a, b];
}

module.exports = {
  findPair,
  tryToParseArray,
}