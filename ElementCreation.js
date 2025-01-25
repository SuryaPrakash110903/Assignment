let color=document.getElementsByClassName("color");
[...color].map((ele)=>{
    ele.addEventListener("mouseover",()=>{
        ele.style.background=ele.innerText
    })
    ele.addEventListener("mouseout",()=>{
        ele.style.background="transparent"
    })
})
let x=document.createElement("h1");
let img=document.createElement("img");
console.log(x)
document.body.appendChild(x);
x.innerText="h1"
x.setAttribute("id","demo");
