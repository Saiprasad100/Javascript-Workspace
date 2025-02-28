const user = {
    firstName : "Saiprasad",
    lastName : "Das",

    welcomeMsg : function(){
      // console.log(`${this.firstName},is my best friend`);
        //console.log(this)
    }

}

 user.welcomeMsg()
// user.firstName = "Swagat"
// user.welcomeMsg()


//console.log(this)


function demo(){

    //console.log(this)
    let username = "hitesh"
      //console.log(this.username);//We can not acess this keyword inside block

}
demo()


const test = function () {
    let username = "hitesh"
    //console.log(this.username);//We can not acess this keyword inside block
}
test()


const chai =  () => {
    let username = "hitesh"
    //console.log(this.username);////We can not acess this keyword inside block
}

 chai()


//  const addTwo = (num1, num2) => {
//      return num1 + num2

//     }
//    // console.log(addTwo(5,8));


 //const addTwo = (num1, num2) =>  num1 + num2
 //console.log(addTwo(10,8));


  const add = (num1,num2) => (num1+num2)
  console.log(add(15,10));

  const star = (num1,num2) => ({username: "Saishree"})
  console.log(star(15,10));

    





