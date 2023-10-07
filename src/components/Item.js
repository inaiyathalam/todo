import React from 'react'

const Item = ({item, handleChange, handleDelete}) => {
  return (
    <div>
      <li>
        <input type="checkbox" checked={item.checked} onChange={() => handleChange(item.id)}/>
        <label style={(item.checked)? {textDecoration:"line-through"}:null} onDoubleClick={() =>handleChange(item.id)}>{item.item}</label>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>       
      </li>
    </div>
  )
}

export default Item
