
let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector("#menu");
let visible = false;
menuToggle.addEventListener("click", ()=>{
    if(visible===true){
        menu.style.display = "none";
        visible=false;
    }else{
        menu.style.display = "block";
       // menu.style.backgroundColor = "#ffffff";
        visible=true;
    }
});
