// document.body.setAttribute('class', 'body-dark');

let button = document.querySelector(".moon");
let bodya = document.body


button.addEventListener("click", ()=>{
    
    console.log("Hello, World! ");
    if(bodya.getAttribute('class') === "body-dark"){
        bodya.removeAttribute('class', 'body-dark');

    }
    else{
         bodya.setAttribute('class', 'body-dark');
    }
});

