function hof(a) {return a();}
hof(function(){console.log("Function body")});

let users=["Hemanth","Aravind","Abhishek"];
let x=users.map((user)=>{return (user)})
console.log(x)
let y=users.forEach((user)=>{return (user)})
console.log(y)

for(i in users){
    console.log(users[i]);
}
for(i of users){
    console.log(i);
}