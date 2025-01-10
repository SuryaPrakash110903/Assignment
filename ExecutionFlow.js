// Closure : closure is a memory created when functions are bundled together by giving accessibility to inner most function to access the variables of outermost function.

//Flow of execution in js
var a=10;
let b=30;
function x(){
    var user="Shravan"
    let company="Amazon"
    const salary=1234
    console.log(user);
    console.log(company);
    console.log(salary);
    console.log(a,b)
}
x();