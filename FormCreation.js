let password=document.getElementById("pass")
let check=document.getElementById("check")
let show=document.getElementById("show")
check.addEventListener("click",event=>{
    if(event.target.checked==true){
        console.log(event)
        password.setAttribute("type","text");
        show.innerText="Hide Password";
    }
    else{
        password.setAttribute("type","password");
        show.innerText="show Password";

    }
})