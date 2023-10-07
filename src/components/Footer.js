import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <h1> There are {props.items.length} {props.items.length<=1?"element" : "elements"} in the list</h1>
      {console.log("HI")}
    </div>
  )
}

export default Footer
