let empDetails=
[
{
    empid:1,
    empname:"Aravind",
    empcompany:"Google",
    empsalary:40000,
    empaddress:{
        empcity:"Vikarabad",
        emparea:"Mekaunapally"
    }

},
{
    empid:2,
    empname:"Ganesh",
    empcompany:"Amazon",
    empsalary:50000,
    empaddress:{
        empcity:"Bhadrachalam",
        emparea:"Ashok Nagar"
    }

},
{
    empid:3,
    empname:"Hemanth",
    empcompany:"Microsoft",
    empsalary:15000,
    empaddress:{
        empcity:"Sircilla",
        emparea:"MG nagar"
    }

},
{
    empid:4,
    empname:"Abhishek",
    empcompany:"Deloit",
    empsalary:80000,
    empaddress:{
        empcity:"Mahabubnagar",
        emparea:"RK nagar"
    }

},
{
    empid:5,
    empname:"Ritwik",
    empcompany:"Cisco",
    empsalary:41000,
    empaddress:{
        empcity:"Hyderabad",
        emparea:"Dulapally"
    }

}
]
let table=document.createElement("table");
document.body.appendChild(table);
table.innerHTML+=`
  <style>
table,tr,td{
border:2px solid black

}
<style/>
`
table.innerHTML+=`

<th>empid</th>
<th>empname</th>
<th>empcompany</th>
<th>empsalary</th>
<th>empcity</th>
<th>emparea</th>
`
empDetails.map(ele=>{
    table.innerHTML+=`
  
    <tr>
    <td>${ele.empid}</td>
    <td>${ele.empname}</td>
    <td>${ele.empcompany}</td>
    <td>${ele.empsalary}</td>
    <td>${ele.empaddress.empcity}</td>
    <td>${ele.empaddress.emparea}</td>
    </tr>
    
    `
    
    
    
})