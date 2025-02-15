// array

const myArr = [0, 1, 2, 7, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)//Add new element
// myArr.push(7)//Add new Element

// myArr.pop()//Remove Last index element

// myArr.unshift(9)//add element in first index

// myArr.shift()//Remove First index element 

// console.log(myArr.includes(9));//it will return bollean value wheather that porticular index is present or not

//console.log(myArr.indexOf(7));//it will give index position of particular element .if its present then it will give index position , If its not present then it will give -1 

// const newArr = myArr.join()// join keyword will bind the element and give that array in String format

// console.log(myArr);
// console.log( newArr);


// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//console.log("C ", myArr);
//console.log(myn2);

/*

slice() creates a new array with a portion of elements copied from the original array, 
while splice() mutates the original array itself by removing, replacing or adding elements to it.

*/