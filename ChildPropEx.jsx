import React from 'react'
function ChildPropEx(props) {
    console.log(props)
  return (
    <div>
      <h1>ChildPropEx</h1>
      <h1>{props.username}</h1>
      <h1>{props.company}</h1>
      {
        props.children[0]
      }
    </div>
  )
}

export default ChildPropEx
