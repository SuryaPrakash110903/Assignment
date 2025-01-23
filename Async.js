let p=new Promise((res,rej)=>{
  setTimeout(()=>{
    res('resolved')
  },3000)
})
console.log(p);

async function x() {
    let z=await p;
    console.log(z);

    
}
x()


async function fetchApi(){
    let fet=await fetch("https://jsonplaceholder.typicode.com/comments")
    let data=await fet.json();
    console.log(data);
}
fetchApi()