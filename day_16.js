/* Question 16 from day 16

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
The time limited function should follow these rules:
If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 
Example 1:
Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}

Example 2:
Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 150
Output: {"resolved":25,"time":100} */

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((reslove , reject) => {
            setTimeout(() => reject("Time Limit Exceeded") , t);
            fn(...args).then(reslove).catch(reject)
        })
    }
};