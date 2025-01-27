let mainEle=document.createElement("div");
let topEle=document.createElement("div");
let bottomEle=document.createElement("div");
mainEle.setAttribute("class","mainEle")

topEle.setAttribute("class","topEle")
bottomEle.setAttribute("class","bottomEle")

document.body.appendChild(mainEle)
mainEle.appendChild(topEle)
mainEle.appendChild(bottomEle)

let img=document.createElement("img");
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXhjVqtRd6tiqcsSQ7rD6VF7NxI-3VvoR0w&s";
topEle.appendChild(img)

let h1=document.createElement("h1");
h1.innerText="Heading";

let button=document.createElement("button");
button.innerText="View more";

bottomEle.appendChild(h1);
bottomEle.appendChild(button);