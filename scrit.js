let a = document.querySelector("#btn");
let b = document.querySelector("p");

let count = 0;
function counter(){
    a.addEventListener("click",function(){
        count++;
        if(count==1)
        {
        b.innerText=count+" "+"click";
       
        
        
        }
    else
    {
        b.innerText=count+" "+"clicks";
        
    
       
    

    }
        
       
    })
}
counter();
