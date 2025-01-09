function Palin(str){
    let rev=""
    let i=str.length-1;
    while(i>=0){
        rev=rev+str[i];
        i--;
    }
    if(str==rev){
        console.log("Palindrome");
    }
    else console.log("No")
}
Palin("madam")
Palin('sir')

