/*const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 4000));
const p2 = new Promise(resolve => setTimeout(() => reject("Second"), 1000));

const p3 = new Promise(resolve => setTimeout(() => resolve("Third"), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve("Four"), 2000));

Promise.all([p1, p2, p3, p4]).then(results => console.log(results)); 
*/
// Illustration of Promise.allSettled() 
// Method in Javascript with Example
 
const p1 = Promise.resolve(50);
const p2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'geek'));
const prm = [p1, p2];
 
Promise.allSettled(prm).
    then((results) => results.forEach((result) =>
        console.log(result.status, result.value)));