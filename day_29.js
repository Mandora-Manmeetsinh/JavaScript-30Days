/* Question 29 from day 29

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]" */

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    if(this.nums.length == 0){
        return 0;
    }
    let sum = 0;
    for( var i of this.nums){
        sum += i
    }
    return sum;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.nums);
}