let x=fetch("https://jsonplaceholder.typicode.com/comments");
x.then((data)=>{
    data.json().then((data)=>{
        // console.log(data)
        let store=document.getElementById("store")
        data.map((user)=>{
            store.innerHTML+=`
           <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.body}</td>
<tr/>
        
            
            `
        })

    })
}).catch((error)=>{console.log("Error occured")})

