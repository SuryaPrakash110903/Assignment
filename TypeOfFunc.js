let a=function(){//Anonymous function
    console.log("Hello")
}
a();
// IIFE
(function(){
    console.log("IIFE")
})();

const arrow=_=>{
    console.log("Arrow function");
}
console.log(arrow);

const arrow1=a=>{
    console.log(a);
}
arrow1(10);

//return

const add=(a,b)=> a+b    //implicit return
console.log(add(10,20))

const add1=(a,b)=> {return a+b}    //explicit return
console.log(add(30,20))