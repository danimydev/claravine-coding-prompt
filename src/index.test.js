const {
  findPair,
  containsOnlyPositive,
  containsUniqueIntegers,
  parseToIntArray } = require('./utils.js');

describe("test suit for findPair function", () => {

  test("should return true if all elements are positive", () => {
    const arr = ["2", 5, 1, 3, 4, 6, 7];
    const result = containsOnlyPositive(arr);
    expect(result).toBe(true);
  });

  test("should return false if element(s) are negative or zero", () => {
    const arr = [2, 5, 1, 3, -4, 6, 7];
    const result = containsOnlyPositive(arr);
    expect(result).toBe(false);
  });

  test("should return true if all array elements are unique", () => {
    const arr = [2, 5, 1, 3, -4, 6, 7];
    const result = containsUniqueIntegers(arr);
    expect(result).toBe(true);
  });

  test("should return false if not all array elements are unique", () => {
    const arr = [2, 5, 1, 3, -4, 6, 5];
    const result = containsUniqueIntegers(arr);
    expect(result).toBe(false);
  });

  test("should return a integer array if elements are integers or possible integer as string", () => {
    const arr = [1, 2, 3, "4", 5];
    const result = parseToIntArray(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return null if elements are not integers nor possible integer as string", () => {
    const arr = [1, 2, 3, "4.5", 5];
    const result = parseToIntArray(arr);
    expect(result).toEqual([]);
  });

  test("should return pair [1,7] given arr [2,5,1,3,4,6,7] and sum 8", () => {
    const arr = [2, 5, 1, 3, 4, 6, 7];
    const result = findPair(arr, 8);
    expect(result).toEqual([1, 7]);
  });

  test("should return null given [3,3,5,6,7] and sum 11", () => {
    const arr = [3, 3, 9, 6, 7];
    const result = findPair(arr, 11);
    expect(result).toEqual(null);
  });

  test("should return null given [4,2,8,25] and sum 11", () => {
    const arr = [4, 2, 8, 25];
    const result = findPair(arr, 26);
    expect(result).toEqual(null);
  });

});