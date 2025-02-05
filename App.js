import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// import Props from './components/Propsexample/Props'
import ChildPropEx from './components/Propsexample/ChildPropEx'
import Childrenprops from './components/Propsexample/Childrenprops'

function App() {
    // <div>
    //   {/* <Navbar/>
    //   <Main/>
      
    //   <Sidebar1/>
    //   <Sidebar2/>
    //   <Footer/> */}
    //   <Props name="Aravind" age={21} marks={[20,30,40]} address={{area:"Vikarabad",state:"Telangana"}}
    //   func={()=>alert(`Welcome ${props.name}`)}
    //   />

    // </div>
//     return(
//       <div>
// <Props username="Aravind" islogin={true} hobbies={["Playing","Reading","singing"]}/>
//       </div>
//   )
return(
<ChildPropEx username="Hemanth1" company="google" >

<Childrenprops/>
<h1>I am main component</h1>
</ChildPropEx>
)
}

export default App
