let modBtn = document.querySelector("#mode")

let body = document.querySelector("body")

let currentMode = "lightMode";


modBtn.addEventListener("click",()=>{
    //console.log("You are Trying to change mode");
    if(currentMode === "lightMode") 
    {
     currentMode= "darkMode";
     body.classList.add("darkMode");
     body.classList.remove("lightMode");
     //document.querySelector("body").style.backgroundColor ="#212121"
     }else{
        currentMode = "lightMode";
        body.classList.add("lightMode")
        body.classList.remove("darkMode");
        //document.querySelector("body").style.backgroundColor ="White"
    }

    console.log(currentMode);
})