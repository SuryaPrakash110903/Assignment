let users=
    {name:"Hemanth",
        age:25,
    }
let x=JSON.stringify(users); //To convert js object to JSON
console.log(x);  
let y=JSON.parse(x); //To convert jSON object to Js object
console.log(y)
