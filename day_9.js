/*Question 9 from Day 9 

Write a function argumentsLength that returns the count of arguments passed to it.

Example 1:
Input: args = [5]
Output: 1

Example 2:
Input: args = [{}, null, "3"]
Output: 3 */

var argumentsLength = function(...args) {
    return args.length;
};