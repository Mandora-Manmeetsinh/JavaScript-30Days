/* Question 19 from day 19

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
promise resolves:
When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:
When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

Example 1:

Input: functions = [ () => new Promise(resolve => setTimeout(() => resolve(5), 200))]
Output: {"t": 200, "resolved": [5]}

Example 2:

Input: functions = [ () => new Promise(resolve => setTimeout(() => resolve(1), 200)),  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)) ]
Output: {"t": 100, "rejected": "Error"} */

var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        functions.forEach(fn => {
            fn()
            .then(val => results.push(val))
            .catch(reason => reject(reason));
        });
        resolve(results);
    })};

var promiseAll = async function(functions) {
    return new Promise((resolve,reject)=>{
        if(functions.length === 0) {
            resolve([]);
            return;
        }
        const arr=new Array(functions.length);
        arr.fill(null);
        let count=0
        functions.forEach(async(fn,i)=>{
            try{
                arr[i]=await fn()
                count++
            
                if(count===functions.length){
                    resolve(arr);
                }
            }
            catch(e){
                reject(e);
            }
        
        });
    });
};