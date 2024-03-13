let form=document.querySelector("form");
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");

form.addEventListener("submit", function (event){
    event.preventDefault();
    
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    

    console.log(user.value);
    console.log(pass.value);

    h1.innerText=user.value;
    h2.innerText=pass.value;
   
    
})

               //Spread
let arr=[1,2,3,4,5,6,7,8,9];
console.log(...arr);

