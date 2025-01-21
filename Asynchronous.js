console.log(10);
console.log(20);
setTimeout(()=>{console.log(30)});
console.log(40);

setInterval(()=>{window.document.writeln("MRU")},2000);

let p1=new Promise((resolve,reject)=>{ })
console.log(p1);

let p2=new Promise((resolve,reject)=>{resolve("Success")

}).then((res)=>{console.log(res)})

let p3 = new Promise((resolve, reject) => {
    reject("failure");
 
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally executed");
  });

// console.log(p3);
