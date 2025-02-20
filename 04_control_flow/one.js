const temp = 42
if(temp===40){
   // console.log("Temperature is Low...")
}
else(temp>40);{
    //console.log("Temperature is High...");
    
}


const score = 250
if(score>200){
    let power = "dance"
    //console.log(`Power is : ${power}`)
}
else{
    let power = "play"
    console.log(`Power is : ${power}`)
}

//console.log(`Power is : ${power}`)


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && loggedInFromEmail  ) {
    console.log("You will get a coupon code of 10%");
} else if (userLoggedIn && debitCard && loggedInFromGoogle ) {
    console.log("You will get a coupon code of 20%");
} else if (userLoggedIn && debitCard) {
    console.log("You can buy a course");
    
}