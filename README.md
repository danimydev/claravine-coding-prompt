# claravine-coding-prompt

Solution for home coding challengue implemented using Javascript (Node JS)

## Problem Description
We need a function that will take an array of values and will return two unique entries that sum to a specified value. The pseudo function signature would be as follows.
findPair(array values, int desired_sum) : array?
The function returns the pair of values if found, if not it returns null.

#### Additional Conditions
This data is coming straight from a user so it has not been validated. The following conditions must be verified by your code. If the data is determined to be invalid, return null.
- The array must not contain anything other than integers or strings that can be parsed as integers
- All array values must be greater than 0
- All array values must unique

If there are multiple pairs that when summed together equal the desired_sum, return the pair that contains the smallest value. (e.g. [1,2,3,4] with desired_sum 5 would return [1,4] and not [2,3] since 1 < 2)

The returned pair must be in the format [smaller_value, greater_value]

When we expose this functionality to the user, we expect array lengths to be in the hundreds of thousands, if not bigger.

#### Examples
- [2,5,1,3,4,6,7] with desired_sum 8 would return [1,7]
- [3,3,5,6,7] with desired_sum 11 would return null
- [4,2,8,25] with desired_sum 26 would return null

## Run the solution
```
git clone https://github.com/danimydev/claravine-coding-prompt.git
cd claravine-coding-prompt
npm install
npm test
npm start
```
