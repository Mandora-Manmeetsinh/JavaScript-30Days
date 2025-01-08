/*Question 4 from day 4 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 
Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]

Example 2:
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]*/

var createCounter = function(init) {
    let presentCount = init;
  
    function increment() {
      return ++presentCount;
    }
  
    function decrement() {
        return --presentCount;
    }
  
    function reset() {
        return (presentCount = init);
    }
  
    return { increment, decrement, reset };
  };
