let container=document.getElementsByClassName("container");
console.log(Array.isArray(container)) //false {not pure array}
//using spread operator
container[0].style.backgroundColor="yellow"
let x=[...container]
console.log(Array.isArray(x)) //true {pure array}

// Now we can use map method for iterating
x.map(element=>{console.log(element)
    element.style.backgroundColor="aqua"
});

let name=document.getElementsByName("name");
console.log(name,Array.isArray(name));

let z=document.querySelector("#class");
console.log(z);

let containerquery=document.querySelector(".quering");
console.log(containerquery);
let containerquery1=document.querySelectorAll(".quering");
console.log(containerquery1);