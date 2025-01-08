/* Question 20 from day 20

Given an object or an array, return if it is empty.
An empty object contains no key-value pairs.An empty array contains no elements.You may assume the object or array is the output of JSON.parse.

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false

Example 2:

Input: obj = {}
Output: true */

var isEmpty = function(obj) {
    return Object.keys(obj).length==0?true:false
};