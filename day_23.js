/* Question 23 from day 23

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
The provided callback fn will accept an item in the array and return a string key.The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
Please solve it without lodash's _.groupBy function.

Example 1:

Input: 
array = [ {"id":"1"}, {"id":"1"}, {"id":"2"} ], 
fn = function (item) { return item.id; }
Output: 
{ "1": [{"id": "1"}, {"id": "1"}],   "2": [{"id": "2"}] }

Example 2:

Input: 
array = [ [1, 2, 3], [1, 3, 5], [1, 5, 9] ]
fn = function (list) { return String(list[0]); }
Output: 
{ "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] } */

Array.prototype.groupBy = function(fn) {
    let arr = this;
    let groupedObj = {};
    for(let i = 0; i<arr.length; i++){
        let key = fn(arr[i]);   
        groupedObj[key] ? groupedObj[key].push(arr[i]) :  groupedObj[key] = [arr[i]];
    }
    return groupedObj;
};