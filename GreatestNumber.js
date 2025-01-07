
let a=prompt("Enter 3 numbers separated by comma(,)");
let numbers=a.split(",");
let num1=Number(numbers[0]);
let num2=Number(numbers[1]);
let num3=Number(numbers[2]);
if(numbers.length==3){
    //using if else ladder
    if(num1>num2 && num1>num3){
        console.log(`${num1} is the largest`);
    }
    else if(num2>num1 && num2>num3){
        console.log(`${num2} is the largest`);
    }
    else{
        console.log(`${num3} is the largest`);
    }



//Using switch
switch(true){
    case (num1>num2 && num1>num3): console.log(`${num1} is the largest`);
    break;
    case (num2>num2 && num2>num3): console.log(`${num2} is the largest`);
    break;
    case (num3>num1 && num3>num2): console.log(`${num3} is the largest`);
}
}
else{
    alert("Only 3 numbers are allowed");
}