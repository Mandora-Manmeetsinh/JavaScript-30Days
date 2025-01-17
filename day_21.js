/* Question 21 from day 21

Given an array arr and a chunk size size, return a chunked array.
A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
Please solve it without using lodash's _.chunk function.

Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]

Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]] */

const chunk = (arr, size) => {
    const chunkedArray = [];
  
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
  
    return chunkedArray;
  };