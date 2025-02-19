let a =150
var c =50
if(true){
    let a = 10
    const b = 15
    var  c = 60 
 //console.log("Inner block value of a :",a);
 
}
//console.log("Global value of a : ",a);
//console.log(b);
//console.log(c);60//It re-assing to 60

function one (){
    const username = "Saiprasad"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website);

     two()
}

one()

if (true) {
    const username = "Saiprasad"
    if (username === "Saiprasad") {
        const website = " youtube"
      //console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5)
const addTwo = function(num){
   
     return num + 2
     
 }
 console.log(addTwo(8))

