
// const object = [1,2,3,4,5,6]
// for (const element of object) {
//     console.log(`element is ${element}`)
// }

const greetings = "Hello world!"
for (const greet of greetings) {
    
if(greet === ' ' || greet === '!')


    continue
    //console.log(`Each Element: ${greet}`)
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//It will Not Print because of Duplicate value 
//In Map duplicate values are allowed but Duplicate Keys are not allowed
//In Map key Should be Unique
//if you give new value to same key then it will updated into new value with same key

//console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }