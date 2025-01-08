/* Question 26 from day 26

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
Please solve it without the built-in Array.flat method.

Example 1:

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

Example 2:

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
Output
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15] */

var flat = function(arr, depth) {
    const stack = [...arr.map(item => [item, depth])];
    const result = [];
  
    while (stack.length > 0) {
      const [item, depth] = stack.pop();
  
      if (Array.isArray(item) && depth > 0) {
        stack.push(...item.map(subItem => [subItem, depth - 1]));
      } else {
        result.push(item);
      }
    }
    return result.reverse();
  };