/*Question 6  from Day 6
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]

Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1] */

var filter = function (arr, fn) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        } 
    }
    return filteredArr;
};