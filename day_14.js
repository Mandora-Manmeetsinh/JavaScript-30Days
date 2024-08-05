/* Question 14 from day 14

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.
If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

Example 1:
Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]

Example 2:
Input: fn = (x) => x**2, args = [2], t = 100
Output: [] */

var cancellable = function(fn, args, t) {
    let timeoutId;
  
    const cancelFn = () =>  clearTimeout(timeoutId);
  
    timeoutId = setTimeout(() => fn(...args), t);
  
    return cancelFn;  
  };