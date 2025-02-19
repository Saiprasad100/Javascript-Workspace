(function demo(){
    console.log(`DB Connected...`);
    
})();//there is a problem in global scope for polution 
   //to remover that pollution we use Function Expression

((name)=>{
    console.log(`Successfull....${name}`);
    
})('happy');