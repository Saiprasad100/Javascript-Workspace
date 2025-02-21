for(let index = 0;index <= 10;index++){
   const element = index
     if(element == 5){
       // console.log("Number is 5")
     }
     //console.log(element) 
}


for (let i =1;i <= 10;i++){

   //console.log(`Outer Loop value :${i}`);
    
    for(let j = 0;j <= 10;j++){
//console.log(`Inner Loop Value :${i} and inner loop ${j} `);
  // console.log(i +' * ' + j +' = ' +i*j);
   
    }

}

let myArray = ["flash", "batman", "superman"]
for(let index=0;index < myArray.length;index++ ){
    const element = myArray[index]
    //console.log(element);
    
}


// for(let index=1;index<=20;index++){


//     const element = index
    

//     if(element == 5){
//     console.log('5 element Detected');
// break
//     }
//     console.log(`index value is " ${element}`);
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}