let btn= document.querySelector("#btn1");
/*btn.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    
    
    console.log("Btn1 is clicked....");

}*/

btn.addEventListener("click",() =>{
    console.log("Event 1 is call")
})

btn.addEventListener("click",() =>{
    console.log("Event 2 is call")
})

const handler3  = () =>{
    console.log("Event 3 is call");
};

btn.addEventListener("click",handler3);

btn.addEventListener("click",() =>{
    console.log("Event 4 is call")
})

btn.removeEventListener("click",handler3)




let div = document.querySelector("div");
div.onmouseover = (e)=>{
    console.log(e.type);
    
console.log('You are in box')
}